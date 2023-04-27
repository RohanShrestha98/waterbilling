import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from './Firebase';
import { toast } from 'react-toastify';

export default function Userpage(props) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [notification,setNotification]= useState(false)
  const [deducted,setdeduction] = useState(0)
  const [total,setTotal] = useState(0)
  const [submit,setSubmit] = useState(false)
  const [nextMonth,setNextMonth] = useState(false)
  useEffect(() => {
    const number = [43, 28, 34, 54, 67, 35, 23];
    
    if (count1 == 7) {
      const newRandomNumber = number[Math.floor(Math.random() * number.length)];
      setRandomNumber(newRandomNumber);
    }else if(count1 == 8){
      const price = 10
      const priceTotal = randomNumber * price
      setTotal(priceTotal)
    }
    else if (count1 == 10 && !submit){
      const charge = total + 100
      setTotal(charge);
    } else if (count1 == 14){
      const newRandomNumber = number[Math.floor(Math.random() * number.length)];
      setRandomNumber2(newRandomNumber);
      
    }else if(count1 == 15){
      const price = 10
      const after = total + randomNumber2 * price 
      setTotal(after)
    } else {
    }
  }, [count1]);
 
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const tick1 = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 86400000);
    const interval1 = setInterval(tick1, 1000);
    return () => {
      clearInterval(interval);
      clearInterval(interval1);
    };
  }, []);
  const logout = ()=>{
       localStorage.removeItem("user");
       window.location.reload();
  }
  // console.log(props.data)
 const userdata = props.data

 const [user2,setUser2] = useState({})
useEffect(()=>{
  if(props.user){
    const userId = props.user.uid;
    const user2 = props.data.find((u) => u.id === userId);
    console.log("user2", user2)
    setUser2(user2)
  }else{
    console.log("error")
  }
},[props.user])
const [username,setUsername]=useState("")
const [id,setId]=useState("")
const [date,setDate]=useState("")

useEffect(()=>{
  if (user2 && user2.username) {
    const { username } = user2;
    const { id } = user2;
    const { timeStamp } = user2;
    setUsername(username)
    setId(id)
    console.log("timeStamp",timeStamp)
    console.log("id",id)
    const date2 = timeStamp.toDate()
    const dateString = date2.toLocaleString();
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - date2.getTime();
    const monthsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 ));
    console.log(currentDate)
    console.log(daysDiff)
    console.log(monthsDiff)
    let popup = []
    if(monthsDiff===1){
      popup.push("One Month passed");
    }else if(monthsDiff===2){
      popup.push("One Month passed");
      popup.push("Second Month passed");
    }
    console.log("popup",popup[0])
    
    setDate(dateString)
    // console.log(username);
  } else {
    console.log("username is undefined or null");
  }
},[user2])
const collectionRef = collection(db, 'users');
const handleSubmit = async (e) => {
  e.preventDefault();
  onAuthStateChanged(auth, async () => {
      try {
          await updateDoc(doc(collectionRef, id), {
              houseno: "19 Address",
              wateruse: "50 liters",
              lastUpdated: serverTimestamp()
          })
          
          toast.success("Data added successfully")
      } catch (error) {
          alert(`Data was now added, ${error.message}`)
      }
  }, [])
}


  return (
    <div>
      <h1>Hello,</h1>
      <h1>{randomNumber}</h1>
      <h1>{randomNumber2}</h1>
      <h1>{count}</h1>
      <h1>{count1}</h1>
      <h1>{total}</h1>
      
      <input type="number" onChange={e=>setdeduction(e.target.value)}/>
      <button onClick={e=>setSubmit(true)}>Submit</button>
      {
        submit && <h1>{total-deducted}</h1>
      }
      <h1>{nextMonth}</h1>
      <button onClick={()=>logout()}><Link to="/">Logout</Link> </button>
      {props.user && (
        <div>
          <p>Welcome, {props.user.email}!</p>
          <p>Welcome, {username}!</p>
          <p>Since {date}!</p>
        </div>
          )
      }
      <button onClick={(e)=>handleSubmit(e)}>Add Fields</button>
    </div>
  );
}
