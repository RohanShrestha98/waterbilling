import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)
  return (
    <div className="navbar">
      <div className="insideNavbar">
      <img src="assests/logo.png" />
      <ul className={click ? " active" : ""}>
          <li><Link className="link" spy={true} smooth offset={-100} duration={500} onClick={closeMenu}>Home</Link></li>
          <li><Link  className="link"  spy={true} smooth offset={-100} duration={500}onClick={closeMenu} >Services</Link></li>
          <li><Link  className="link"  spy={true} smooth offset={-100} duration={500}onClick={closeMenu} >FAQs</Link></li>
          <li><Link className="link loginbutton" to="/login" spy={true} smooth offset={-100} duration={500}onClick={closeMenu} ><p>Login</p> </Link></li>
          <li><Link to="/signup" className="link signbutton"  spy={true} smooth offset={-100} duration={500}onClick={closeMenu} ><p>Signup</p> </Link></li>
        </ul>
        </div>
    </div>
  );
};

export default Navbar;