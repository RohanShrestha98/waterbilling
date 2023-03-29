import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./style.css"

export default function SuperAdminLogin() {
    const [state, setState] = React.useState({
        email: "",
        password: "",
        verify: false,
      });
      const [error,setError]=useState("")
    
    const formFieldHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setState({ ...state, [name]: value });
      }; 
      const navigate = useNavigate()
      const handleSubmit = (e) => {
        e.preventDefault();
        if(state.email==="nahorshrestha@gmail.com" && state.password ==="zaq@XSW2"){
          toast.success("Login Successfull")
          navigate("/superadmindashboard")
        }else{
            setError("Incorrect email or password")
        }
      };
      const [eye,setEye]= useState(true)
  return (
    <div>
       <div className="PhoneNumberLogin">
        <div className="logo"> <img src="img/logo.png" alt="" /></div>
        <h2>Super Admin Login</h2>
        <p>Email.</p>
        <input type="email" name="email" onChange={formFieldHandler} placeholder="Enter your email"/>
        <p>Password.</p>
        <div className='password'>
        <input type={eye?"password":"text"} name="password" onChange={formFieldHandler} placeholder="Enter your password"/>
        <i class="fa-solid fa-eye" onClick={(e)=>setEye((prev)=>!prev)}></i>
        </div>
        <span>{error}</span>
              <button onClick={handleSubmit} >Login</button>
              <Link to="/adminlogin" className="alreadyhaveacc"><p>Admin Login</p> </Link>
      </div>
    </div>
  )
}
