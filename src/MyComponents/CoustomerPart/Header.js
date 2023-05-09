import React from 'react'
import "./coustomer.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom/dist';


export default function Header(props) {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' })
  const day = today.getDate();
  const year = today.getFullYear();
const [notification,setNotification] = useState(false)
const handleNotificationClick = (prev) => {
  setNotification(!prev);
};

  return (
    <div className='header'>
      <h2>{props.name}</h2>
      <h3>{month} {day}, {year}</h3>
      <div className='notificationEmail'>
        <img className='notification'onClick={() => handleNotificationClick(notification)} src="img/Notification.png" alt="" />
        {
          notification && 
          <div className='notificationClick'>
            <div className='notificationheader'>
              <h1>Notifications</h1>
            </div>
            
              {
                props.shownotification.map((items)=>(
                  <div className='notificationbillsdetail'>
              <img src={items.img} alt="" />
                  <Link to="/bills" style={{textDecoration:"none"}} key={items.id}>
                  <h2>{items.message}</h2>
                  <h3>{items.date}</h3>
                </Link>
                </div>
                ))
              }
             
            
          </div>
        }
        <div className='Email'>
          <img src="img/profile.jpg" alt="" />
          <div className='profile'>
          <h4>{props.username}</h4>
          <p>{props.email}</p>
          </div>
         
        </div>
      </div>
      </div>
  )
}
