import React from "react";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import SignupNavigation from "./SignupNavigation";

export default function UserLogin() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Login Successfull")
        navitage("/");
      })
      .catch((error) => {
        setError(true);
      });
  };
  const [eye,setEye]= useState(true)
  return (
    <>
    <SignupNavigation/>
    <form className="PhoneNumberLogin" onSubmit={handleLogin}>
      <div className="logo">
        {" "}
        <img src="img/logo.png" alt="" />
      </div>
      <h2>User Login</h2>
      <p>Email.</p>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <p>Password.</p>
      <div className="password">
        <input
          type={eye ? "password" : "text"}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <i class="fa-solid fa-eye" onClick={(e) => setEye((prev) => !prev)}></i>
      </div>
      {error && <span>Wrong email or password!</span>}
      <button>Login</button>
      <Link to="/createuseraccount" className="alreadyhaveacc"><p>Dont have account</p> </Link>
      
    </form>
    </>
  );
}
