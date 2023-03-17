import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftDashboard() {
    const general = [
        {
            id:"1",
            icon:"icon/dashboard.svg",
            title:"Dashboard",
            link:"/dashboard"
        },
        {
            id:"2",
            icon:"icon/notification.svg",
            title:"Notifications",
            link:"/notifications"
        }
    ]
    const billmanagement = [
        {
            id:"1",
            icon:"icon/dashboard.svg",
            title:"Bills",
            link:"/bills"
        },
        {
            id:"2",
            icon:"icon/notification.svg",
            title:"Revenue",
            link:"/revenue"
        }
    ]
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
                    <Link to={items.link} className="navigate">
                    <img src={items.icon} alt="" /> 
                    <h4>{items.title}</h4>
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
                    <Link to={items.link} className="navigate">
                    <img src={items.icon} alt="" /> 
                    <h4>{items.title}</h4>
                    </Link>
                </div>
            ))
        }
      </div>
    </section>
  )
}
