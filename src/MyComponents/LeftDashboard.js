import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function LeftDashboard() {
    const general = [
        {
            id:"1",
            icon:"img/Category.png",
            title:"Dashboard",
            link:"/admindashboard"
        }
    ]
    const billmanagement = [
        {
            id:"1",
            icon:"img/Invoice.png",
            title:"Invoice",
            link:"/invoice"
        }
    ]
    const usermanagement = [
        {
            id:"1",
            icon:"img/profile2user.png",
            title:"Customers",
            link:"/customers"
        }
    ]

    const location = useLocation()
    
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('user2');
        navigate("/")
        window.location.reload();
      };
  return (
    <section className='leftDashboard'>
    
      <div className='logo'>
        <img src="img/logo.png" alt="" />
      </div>
      <div className='navigations'>
        <p>General</p>
        {
            general.map((items)=>(
                <div key={items.id}>
                    <Link to={items.link} className= {`navigate ${location.pathname === items.link ? 'navigateactive' : ''} `} >
                    <img src={items.icon} alt="" /> 
                    <p>{items.title}</p>
                    </Link>
                </div>
            ))
        }
      </div>
      <div className='navigations'>
        <p>Bill Managements</p>
        {
            billmanagement.map((items)=>(
                <div key={items.id}>
                    <Link to={items.link}  className= {`navigate ${location.pathname === items.link ? 'navigateactive' : ''} `} >
                    <img src={items.icon} alt="" /> 
                    <p>{items.title}</p>
                    </Link>
                </div>
            ))
        }
      </div>
      <div className='navigations'>
        <p>User Managements</p>
        {
            usermanagement.map((items)=>(
                <div key={items.id}>
                    <Link to={items.link}  className= {`navigate ${location.pathname === items.link ? 'navigateactive' : ''} `} >
                    <img src={items.icon} alt="" /> 
                    <p>{items.title}</p>
                    </Link>
                </div>
            ))
        }
      </div>
      <h3 onClick={logout} className="navigate logout">
                    {/* <img src={items.icon} alt="" />   */}
                    <p>Log Out</p>
                    </h3>
    </section>
  )
}
