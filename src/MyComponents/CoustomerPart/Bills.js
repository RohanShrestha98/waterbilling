import React, { useEffect, useState } from 'react'
import "./coustomer.css"
import Header from './Header'
import Sidebar from './Sidebar';

export default function Bills(props) {
  const [user2,setUser2]=useState({})
  useEffect(() => {
    if (props.user) {
      const userId = props.user.uid;
      const user2 = props.data.find((u) => u.id === userId);
      console.log("user2", user2);
      setUser2(user2 || {});
    } else {
      console.log("error");
    }
  }, [props.data, props.user]);

  useEffect(() => {
    console.log("Setting user2 to localStorage:", user2);
    localStorage.setItem("user2", JSON.stringify(user2));
  }, [user2]);
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user2");


    if (storedUser) {
      setUser2(JSON.parse(storedUser ?? "{}"));
    }
  }, []);
  console.log("user2Bills",user2)
  console.log("user2Bills Email",user2.email)

  return (
    <div className='users'>
    <Sidebar/>
    <div className='rightUserPart'>
    <Header name={"Bills"} user={props.user} data={props.data} username={user2.username} email={user2.email}/>
    
  </div>
  </div>
  )
}
