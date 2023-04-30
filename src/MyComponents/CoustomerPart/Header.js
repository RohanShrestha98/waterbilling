import React from 'react'
import "./coustomer.css"
import { useEffect } from 'react';
import { useState } from 'react';


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
