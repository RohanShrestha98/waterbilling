// import "./new.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function AddAdmin(props) {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(data);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        await setDoc(doc(db, "users", res.user.uid), {
          ...data,
          timeStamp: serverTimestamp(),
        });
        props.setAdd(false);
      } catch (err) {
        console.log(err);
      }
   
  };
  return (
    <div className="displayAddAdmin">
      <div className="addAdmin">
        <div className="title">
          <h1>Assign Admin</h1>
          <img src="img/close.png" alt="" onClick={props.handleAdd} />
        </div>
        <form onSubmit={handleAdd} className="form">
          <div className="input">
            <p>
              Username<span>*</span>
            </p>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              onChange={handleInput}
            />
          </div>
          <div className="input">
            <p>
              Phone number<span>*</span>
            </p>
            <input
              id="phone"
              type="number"
              placeholder="Enter phone number"
              onChange={handleInput}
            />
          </div>
          <div className="input">
            <p>
              Email<span>*</span>
            </p>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              onChange={handleInput}
            />
          </div>
          <div className="input">
            <p>
              Password<span>*</span>
            </p>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              onChange={handleInput}
            />
          </div>
          <div className="input">
            <p>
              Assign Province<span>*</span>
            </p>
            <input
              id="address"
              type="text"
              placeholder="Enter assigned provience"
              onChange={handleInput}
            />
          </div>
          <div className="fileImg">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <div className="formInput">
              <label htmlFor="file">Upload image</label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <button type="submit">Add admin</button>
        </form>
      </div>
    </div>
  );
}
