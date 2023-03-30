import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function SignupNavigation() {
  return (
    <div>
       <div className="navbar">
      <div className="insideNavbar">
      <img src="img/logo.png" />
      <ul >
          <li><Link to="/" className="link" >Home</Link></li>
          <li><Link to="/" className="link" >Services</Link></li>
          <li><Link to="/" className="link" >FAQs</Link></li>
          <li><Link className="link " to="/adminlogin" >Admin Login </Link></li>
          <li><Link to="/superadminlogin" className="link ">SuperAdmin Login </Link></li>
        </ul>
        </div>
    </div>
    </div>
  )
}
