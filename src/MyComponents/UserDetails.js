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
import app from "./Firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth, db, storage } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import Navbar from "./Navbar"
import LoginNavigation from "./LoginNavigation";

export default function UserDetails(props) {
  const [state, setState] = React.useState({
    name: "",
    houseno: "",
    number: "",
    password: "",
    conformpassword: "",
    verifyButton: true,
    verifyOtp: false,
    otp: "",
    verify: false,
  });
  const [eye, setEye] = useState(true);
  const [error, setError] = useState("");
  const [eye2, setEye2] = useState(true);
  const onCaptchaVerify = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          onSigninSubmit();
        },
      },
      auth
    );
  };

  const onSigninSubmit = (e) => {
    e.preventDefault()
    if(data.provience!== "1" && data.provience!== "2" && data.provience!== "3" && data.provience!== "4" && data.provience!== "5" && data.provience!== "6" && data.provience!== "7" ){
      setError("Incorrect Provience")
    }else if(!data.username){
      setError("Name Field is required")
    }else if(!data.password){
      setError("Password field is required")
    }else if(!data.phone){
      setError("Phone field is required")
    }
    else if (data.password !== data.conformpassword) {
      setError("Password doesnot match");
    }else{
      onCaptchaVerify();
      const phoneNumber = "+977 - " + data.phone;
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          toast.success("OTP Send");
          setState((prevState) => ({ ...prevState, verifyOtp: true }));
        })
        .catch((error) => {
          // toast.error("To many request");
          console.log(error);
        });
    }
   
  };

  useEffect(() => {
    if (state.mobile && state.mobile.length === 10) {
      setState((prevState) => ({ ...prevState, verifyButton: false }));
    }
  }, [state.mobile]);

  const verifyCode = (e) => {
    e.preventDefault()
    window.confirmationResult
      .confirm(state.otp)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Verification Done");
        setState((prevState) => ({ ...prevState, verify: true }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formFieldHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
  }; 
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(state.verify){
      navigate("/userdetails")
    }
  };
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
 
  const handleAdd =async(e)=>{
    e.preventDefault();
    if(data.provience!== "1" && data.provience!== "2" && data.provience!== "3" && data.provience!== "4" && data.provience!== "5" && data.provience!== "6" && data.provience!== "7" ){
      setError("Incorrect Provience")
    }else if(!data.username){
      setError("Name Field is required")
    }else if(!data.password){
      setError("Password is required")
    }
    else if (data.password !== data.conformpassword) {
      setError("Password doesnot match");
    }
    else{
        try {
          const res = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );
          await setDoc(doc(db,data.provience=== "1" ? "provienceone" : data.provience=== "2" ? "proviencetwo" :data.provience=== "3"? "proviencethree" : data.provience=== "4" ? "proviencefour" : data.provience=== "5" ?  "proviencefive" : data.provience=== "6" ? "proviencesix" : data.provience=== "7" ? "provienceseven" : toast.error("Incorrect provience"), res.user.uid), {
            ...data,
            timeStamp: serverTimestamp(),
          });
          
            toast.success("Data Regester to our System")
            navigate("/userlogin")
          
          
        } catch (err) {
          toast.error("Data is already in our system")
          console.log(err);
        }
      };
  }
  

  return (
    <>
    <LoginNavigation/>
    <div>
      <form  className="PhoneNumberLogin">
      <div id="recaptcha-container"></div>
      <div className="logo">
          <img src="img/logo.png" alt="" />
        </div>
        {state.verifyOtp ? <h2>Phone number verification</h2>:
        <h2>Create an Account</h2>}
        {
          state.verifyOtp ?
          <div className="verifynumber">
          <Link to={"/createuseraccount" } style={{textDecoration:"none"}}>  <h3><img src="img/back.png" alt="" /> Back</h3></Link>
            <p>Verify your phone number </p>
            <h2>We’ve sent a 6-digit verification code to 98XXXXXXXX</h2>
        <input
              type="number"
              name="otp"
              placeholder="Enter the 6-digits code"
              onChange={formFieldHandler}
            />
            </div> :
           <>
            <p>Full Name</p>
            <input
              id="username"
              type="text"
              placeholder="Enter your name"
              onChange={handleInput}
            />
            <p>Provience no</p>
            <input
              id="provience"
              type="number"
              placeholder="Enter your Provience number"
              onChange={handleInput}
            />
            
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
              id="conformpassword"
              type={eye2 ? "password" : "text"}
              placeholder="Retype your password"
              onChange={handleInput}
            />
            <span>{error}</span>
            </> 
            
        }
       {
          state.verify?
          <button onClick={handleAdd}>Submit</button> : state.verifyOtp ?
            <button onClick={verifyCode}  >Verify Otp</button>
           :
              <button onClick={onSigninSubmit}  >Verify Number</button>
        }
        
        <Link to="/userlogin" className="alreadyhaveacc"><p>Already have Account</p> </Link>
      </form>
    </div>
    </>
  );
}
