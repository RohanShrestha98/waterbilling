import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function LoginNavigation() {
  return (
    <div>
       <div className="navbar">
      <div className="insideNavbar">
      <img src="assests/logo.png" />
      <ul >
          <li><Link to="/" className="link" >Home</Link></li>
          <li><Link to="/" className="link" >Services</Link></li>
          <li><Link to="/" className="link" >FAQs</Link></li>
          
        </ul>
        </div>
    </div>
    </div>
  )
}
