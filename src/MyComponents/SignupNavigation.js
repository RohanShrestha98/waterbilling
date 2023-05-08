import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function SignupNavigation() {
  return (
    <div>
       <div className="navbar">
      <div className="insideNavbar">
      <Link to="/"><img src="img/logo.png" /></Link>
      <ul >
          <li><Link className="link " to="/adminlogin" style={{color:"black "}}>Admin Login </Link></li>
          <li><Link to="/superadminlogin" className="link " style={{color:"black "}}>SuperAdmin Login </Link></li>
        </ul>
        </div>
    </div>
    </div>
  )
}
