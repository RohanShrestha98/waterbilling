import React, { useState, useEffect } from 'react';

export default function Userpage() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [total, setTotal] = useState(0);
  const [notification,setNotification]= useState(false)
  useEffect(() => {
    const number = [3, 8, 34, 54, 67, 3564, 23];
    
    if (count1 == 7 || count1 == 0) {
      const newRandomNumber = number[Math.floor(Math.random() * number.length)];
      setRandomNumber(newRandomNumber);
      
      setNotification(true)
      
    } else {
      console.log('not 7');
    }
  }, [count1]);
  const price = 10
  const priceTotal = randomNumber * price
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

  return (
    <div>
      <h1>{randomNumber}</h1>
      <h1>{count}</h1>
      <h1>{count1}</h1>
      {
        notification && <h1>{priceTotal}</h1>
      }
      
    </div>
  );
}
