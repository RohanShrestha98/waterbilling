import React from 'react'
import "./coustomer.css"
import { useEffect } from 'react';
import { useState } from 'react';


export default function Header(props) {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' })
  const day = today.getDate();
  const year = today.getFullYear();
//   const [user2, setUser2] = useState({});
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
 
//  useEffect(() => {
//    if (props.user) {
//      const userId = props.user.uid;
//      const user2 = props.data.find((u) => u.id === userId);
//      console.log("user2", user2);
//      setUser2(user2 || {});
//    } else {
//      console.log("error");
//    }
//  }, [props.data, props.user]);

//  console.log("headerusers",user2)

//  useEffect(()=>{
//   if (user2) {
//     const { username } = user2;
//     const { email } = user2;
//     setUsername(username)
//     console.log(username)
//     setEmail(email)
//   } else {
    
//   }
// },[user2])
//  // update localStorage whenever the user2 state changes
//  useEffect(() => {
//   console.log("Setting user2 to localStorage:", user2);
//   localStorage.setItem("user2", JSON.stringify(user2));
// }, [user2]);


//  // retrieve user data from localStorage when the component mounts
//  useEffect(() => {
//   const storedUser = localStorage.getItem("user2");

//   if (storedUser) {
//     setUser2(JSON.parse(storedUser ?? "{}"));
//   }
// }, []);
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
