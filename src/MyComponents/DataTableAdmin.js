
import { userColumns} from "../DatatableSourse";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./Firebase";
import "./style.css"

const DataTableAdmin = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db,"users" ),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const [conform,setConform]=useState(false);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
            <Link to="/adminedit" style={{ textDecoration: "none" }}>
              <div className="viewButton"><img src="img/edit.png" alt="" /></div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <img src='img/delete.png' alt=""  />
              
            </div>
            <Link to="/admindetails" style={{ textDecoration: "none" }}>
              <div className="viewButton"><img src="img/view.png" alt="" /></div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable" style={{height:"500px",overflow:"auto"}}>
      {
        conform && 
        <div className="conform">
        <div className="conformImage"></div>
        <h3>Are you sure you want to delete this admin?</h3>
        <div className="conformButton">
          <p>Cancel</p>
          <p>Delete</p>
        </div>
      </div>
      
      }
      
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTableAdmin;
