import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function LoginNavigation() {
  return (
    <div>
       <div className="navbar">
      <div className="insideNavbar">
     <Link to="/"> <img src="img/logo.png" /></Link>
      <ul >
          <li><Link to="/" className="link" style={{color:"black "}}>Home</Link></li>
          <li><Link to="/" className="link" style={{color:"black "}}>Services</Link></li>
          <li><Link to="/" className="link" style={{color:"black "}}>FAQs</Link></li>
        </ul>
        </div>
    </div>
    </div>
  )
}
