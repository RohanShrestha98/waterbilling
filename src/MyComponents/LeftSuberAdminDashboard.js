import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftSuperAdminDashboard() {
    const general = [
        {
            id:"1",
            icon:"img/Category.png",
            title:"Dashboard",
            link:"/admindashboard"
        },
        {
            id:"2",
            icon:"img/notification.png",
            title:"Notifications",
            link:"/notifications"
        }
    ]
    const billmanagement = [
        {
            id:"1",
            icon:"img/Invoice.png",
            title:"Invoice",
            link:"/invoice"
        },
        {
            id:"2",
            icon:"img/notification.png",
            title:"Revenue",
            link:"/revenue"
        }
    ]
    const usermanagement = [
        {
            id:"1",
            icon:"img/profile2user.png",
            title:"Customers",
            link:"/customers"
        },
        {
            id:"2",
            icon:"img/usertag.png",
            title:"Billing Admin",
            link:"/billingadmin"
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
                    <Link to={items.link} className="navigate">
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
                    <Link to={items.link} className="navigate">
                    <img src={items.icon} alt="" /> 
                    <p>{items.title}</p>
                    </Link>
                </div>
            ))
        }
      </div>
    </section>
  )
}
