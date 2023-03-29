import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)
  return (
    <div className="navbar2">
      <div className="insideNavbar2">
      <img src="assests/logo.png" />
      <ul className={click ? " active" : ""}>
          <li><Link className="link" spy={true} smooth offset={-100} duration={500} onClick={closeMenu}>Home</Link></li>
          <li><Link  className="link"  spy={true} smooth offset={-100} duration={500}onClick={closeMenu} >Services</Link></li>
          <li><Link  className="link"  spy={true} smooth offset={-100} duration={500}onClick={closeMenu} >FAQs</Link></li>
          <li><Link className="link loginbutton" to="/userlogin" spy={true} smooth offset={-100} duration={500}onClick={closeMenu} ><p>Login</p> </Link></li>
          <li><Link to="/createuseraccount" className="link signbutton"  spy={true} smooth offset={-100} duration={500}onClick={closeMenu} ><p>Signup</p> </Link></li>
        </ul>
        </div>
    </div>
  );
};

export default Navbar;