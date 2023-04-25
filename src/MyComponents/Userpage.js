import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

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
  return (
    <div>
      <h1>Hello, {props.userEmail}</h1>
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
        </div>
          )
      }
      {/* {props.user ? (
        <div>
          <p>Welcome, {props.user.email}!</p>
          {userdata.map(item => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Please sign in to view the data.</p>
      )} */}
    </div>
  );
}
