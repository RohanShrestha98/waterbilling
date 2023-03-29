import React, { useEffect } from "react";
import app from "./Firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./style.css"

const auth = getAuth(app);

export default function PhoneSignup() {
  const [state, setState] = React.useState({
    mobile: "",
    verifyButton: true,
    verifyOtp: false,
    otp: "",
    verify: false,
  });

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

  const onSigninSubmit = () => {
    onCaptchaVerify();
    const phoneNumber = "+977 - " + state.mobile;
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
  };

  useEffect(() => {
    if (state.mobile && state.mobile.length === 10) {
      setState((prevState) => ({ ...prevState, verifyButton: false }));
    }
  }, [state.mobile]);

  const verifyCode = () => {
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
  

  return (
    <div>
      <div className="PhoneNumberLogin">
        <div className="logo"> <img src="img/logo.png" alt="" /></div>
        <div id="recaptcha-container"></div>
        <h2>Super Admin Login</h2>
        <p>Phone No.</p>
        <input type="number" value={state.mobile}  onChange={formFieldHandler} placeholder="Enter your phone no."/>
        {state.verifyOtp ? (
          <>
          <p>OTP</p>
        <input
              type="number"
              name="otp"
              placeholder="Enter the 6-digits code"
              onChange={formFieldHandler}
            /></>
        ): null}
        {
          state.verify?
          <button onClick={handleSubmit}>Submit</button> : state.verifyOtp ?
            <button onClick={verifyCode}  >Verify Otp</button>
           :
              <button onClick={onSigninSubmit} className={state.verifyButton ? "disable" : "nodisable"} disabled={state.verifyButton} >Send OTP</button>
             
            
        }
        
      </div>
    </div>
  );
}
