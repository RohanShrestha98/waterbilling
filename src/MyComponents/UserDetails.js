import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"

export default function UserDetails() {
  const [state, setState] = React.useState({
    name: "",
    houseno: "",
    number: "",
    password: "",
    conformPassword: "",
    verifyButton: true
  });
  const navigate = useNavigate()
  const [eye,setEye]= useState(true)
  const [error,setError]= useState("")
  const [eye2,setEye2]= useState(true)
  console.log(state.password)
  const formFieldHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
  }; 
  const checkPassword=()=>{
    if(state.password !== state.conformPassword){
      setError("Password doesnot match")
    }else{
      setError("")
    }
  }
  const handleSubmit = ()=>{
    if(state.name.length==0){
      setError("Enter your name")
    }else if(state.houseno.length==0){
      setError("Enter your house number")
    }
    else if(state.number.length==0){
      setError("Enter your phone number")
    }else if(state.password.length==0){
      setError("Enter your house number")
    }else{
      navigate("/workinprogress")
    }
  }
 
  return (
    <div>
<div className="PhoneNumberLogin">
        <div className="logo"> <img src="img/logo.png" alt="" /></div>
        <h2>Fill your Details</h2>
        <p>Username</p>
        <input type="text" name="name" onChange={formFieldHandler} placeholder="Enter your name"/>
        <p>House No</p>
        <input type="text" name="houseno" onChange={formFieldHandler} placeholder="Enter your house no"/>
        <p>Phone No.</p>
        <input type="text" name="number" onChange={formFieldHandler} placeholder="Enter your phone no"/>
        <p>Password</p>
        <div className='password'>
        <input type={eye?"password":"text"} name="password" onChange={formFieldHandler} placeholder="Enter your password"/>
        <i class="fa-solid fa-eye" onClick={(e)=>setEye((prev)=>!prev)}></i>
        </div>
        <p>Conform Password</p>
        <div className='password'>
        <input type={eye2?"password":"text"} name="conformPassword" onChange={formFieldHandler} placeholder="Retype your password" onMouseOut={checkPassword}/>
        <i class="fa-solid fa-eye" onClick={(e)=>setEye2((prev)=>!prev)}></i>
        </div>
        <p className='error'>{error}</p>
        <button onClick={handleSubmit} >Submit</button>
      </div>
    </div>
  )
}
