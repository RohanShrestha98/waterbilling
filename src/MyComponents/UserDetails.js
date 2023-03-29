import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";
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
import { toast } from "react-toastify";

export default function UserDetails(props) {
  const [state, setState] = React.useState({
    name: "",
    houseno: "",
    number: "",
    password: "",
    conformPassword: "",
    verifyButton: true,
  });
  const navigate = useNavigate();
  const [eye, setEye] = useState(true);
  const [error, setError] = useState("");
  const [eye2, setEye2] = useState(true);
  console.log(state.password);
  const formFieldHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
  };
  const checkPassword = () => {
    if (state.password !== state.conformPassword) {
      setError("Password doesnot match");
    } else {
      setError("");
    }
  };
  // const handleSubmit = () => {
  //   if (state.name.length == 0) {
  //     setError("Enter your name");
  //   } else if (state.houseno.length == 0) {
  //     setError("Enter your house number");
  //   } else if (state.password.length == 0) {
  //     setError("Enter your house number");
  //   } else {
  //     navigate("/workinprogress");
  //   }
  // };
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
      await setDoc(doc(db, "normaluser", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      toast.success("Signup Successfull")
      navigate("/workinprogress")
    } catch (err) {
      toast.error("Data is already in our system")
      console.log(err);
    }
  };

  return (
    <div>
      {/* <form onSubmit={handleAdd} className="PhoneNumberLogin">
        <div className="logo">
          <img src="img/logo.png" alt="" />
        </div>
        <h2>Create an Account</h2>
        <p>Email Address</p>
        <input
          type="email"
          id="name"
          onChange={handleInput}
          placeholder="Enter your email address"
        />
        <p>Phone No</p>
        <input
          type="number"
          id="phone"
           onChange={handleInput}
          placeholder="Enter your phone no"
        />
        
        <p>Password</p>
        <div className="password">
          <input
            type={eye ? "password" : "text"}
            id="password"
            onChange={handleInput}
            placeholder="Enter your password"
          />
          <i
            class="fa-solid fa-eye"
            onClick={(e) => setEye((prev) => !prev)}
          ></i>
        </div>
        <p>Conform Password</p>
        <div className="password">
          <input
            type={eye2 ? "password" : "text"}
            id="conformPassword"
            onChange={handleInput}
            placeholder="Retype your password"
            onMouseOut={checkPassword}
          />
          <i
            class="fa-solid fa-eye"
            onClick={(e) => setEye2((prev) => !prev)}
          ></i>
        </div>
        <p className="error">{error}</p>
        <button type="submit">Submit</button>
      </form> */}
      <form onSubmit={handleAdd} className="PhoneNumberLogin">
      <div className="logo">
          <img src="img/logo.png" alt="" />
        </div>
        <h2>Create an Account</h2>
        <p>Username</p>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            onChange={handleInput}
          />
          {/* <p>House no</p>
          <input
            id="houseno"
            type="text"
            placeholder="Enter your house number"
            onChange={handleInput}
          /> */}
        <p>Email Address</p>
          <input
            id="email"
            type="text"
            placeholder="Enter your email address"
            onChange={handleInput}
          />
          <p>
            Phone number
          </p>
          <input
            id="phone"
            type="number"
            placeholder="Enter your phone number"
            onChange={handleInput}
          />
          <p>
            Password
          </p>
          <input
            id="password"
            type={eye2 ? "password" : "text"}
            placeholder="Enter your password"
            onChange={handleInput}
          />
           <p>
            Conform Password
          </p>
          <input
            id="password"
            type={eye2 ? "password" : "text"}
            placeholder="Retype your password"
            onChange={handleInput}
            onMouseOut={checkPassword}
          />
        <button type="submit">Continue</button>
        <Link to="/userlogin" className="alreadyhaveacc"><p>Already have Account</p> </Link>
      </form>
    </div>
  );
}
