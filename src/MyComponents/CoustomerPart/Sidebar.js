import React from 'react'
import "./coustomer.css"
import { Link } from 'react-router-dom'


export default function Sidebar() {
  const siderbar = [
    {
      id:"1",
      icon:"img/Dashboard.svg",
      name:"Home",
      link:"/"
    },
    {
      id:"2",
      icon:"img/bills.png",
      name:"Bills",
      link:"/bills"
    },
    {
      id:"3",
      icon:"img/Analytics.png",
      name:"Analytics",
      link:"/analytics"
    },
    {
      id:"3",
      icon:"img/Dashboard.svg",
      name:"Profile",
      link:"/profile"
    }
  ]
  const logout = ()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("user2");
    window.location.reload();
}
  return (
    <div className='sidebar'>
        <div className='logo2'>
        <img src="img/logo.png" alt="" />
        </div>
        <div className='sidebarNavigation'>
        {
          siderbar.map((items)=>(
            <div key={items.id} >
              <Link to={items.link}  className='sidebarnames'>
              <img src={items.icon} alt="" />
              <h3>{items.name}</h3>
              </Link>
            </div>
          ))
        }
        </div>
        <button onClick={()=>logout()}>Logout</button>
    </div>
  )
}
