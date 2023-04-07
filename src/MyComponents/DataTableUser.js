
import { normaluserColumns} from "../DatatableSourse";
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

const DataTableUser = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db,props.table ),
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
      await deleteDoc(doc(db, props.table, id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="actions">
              <img src="img/true.png" alt="" />
            <p>Accept</p>
            </div>
            <div className="actions">
              <img src="img/false.png" alt="" />
            <p className="deny">Deny</p>
            </div>
            <p></p>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable" style={{height:"500px"}}>
      
      <DataGrid
        className="datagrid"
        rows={data}
        columns={normaluserColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTableUser;
