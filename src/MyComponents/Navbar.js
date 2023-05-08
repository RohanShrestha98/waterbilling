import React, { useState } from "react";
import "./Navbar.css";
import { Link }  from "react-scroll";
import { Link as Link2 } from "react-router-dom";


const Navbar = () => {
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)
  return (
    <div className="navbar2">
      <div className="insideNavbar2">
     <Link to="/"> <img src="assests/logo.png" /></Link>
      <ul className={click ? " active" : ""}>
          <li><Link className="link" to="learn" spy={true} smooth offset={-100} duration={200} onClick={closeMenu}>Services</Link></li>
          <li><Link  className="link"  to="questions" spy={true} smooth offset={-100} duration={200}onClick={closeMenu} >FAQs</Link></li>
          <li><Link  className="link"  to="contact" spy={true} smooth offset={-100} duration={200}onClick={closeMenu} >Contacts</Link></li>
          <li><Link2 className="link loginbutton" to="/userlogin" spy={true} smooth offset={-100} duration={500}onClick={closeMenu} ><p>Login</p> </Link2></li>
          <li><Link2 to="/createuseraccount" className="link signbutton"  spy={true} smooth offset={-100} duration={500}onClick={closeMenu} ><p>Signup</p> </Link2></li>
        </ul>
        </div>
    </div>
  );
};

export default Navbar;