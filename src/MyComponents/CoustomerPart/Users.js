import React, { useEffect, useState } from 'react'
import "./coustomer.css"
import Sidebar from './Sidebar'
import Bills from './Bills'
import { collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { auth, db } from '../Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { toast } from 'react-toastify'

export default function Users(props) {
  const [kycform,setKycForm] = useState(false)
  const [kycfilled,setkycfilled] = useState(true)
  const [user2, setUser2] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState({});
 
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

 console.log("headerusers",user2)

 useEffect(()=>{
  if (user2) {
    const { username } = user2;
    const { email } = user2;
    const { id } = user2;
    setUsername(username)
    setId(id)
    console.log(username)
    setEmail(email)
  } else {
    
  }
},[user2])
 // update localStorage whenever the user2 state changes
 useEffect(() => {
  console.log("Setting user2 to localStorage:", user2);
  localStorage.setItem("user2", JSON.stringify(user2));
}, [user2]);


 // retrieve user data from localStorage when the component mounts
 useEffect(() => {
  const storedUser = localStorage.getItem("user2");

  if (storedUser) {
    setUser2(JSON.parse(storedUser ?? "{}"));
  }
}, []);

const collectionRef = collection(db, 'user');
const handleSubmit = async (e) => {
  e.preventDefault();
  onAuthStateChanged(auth, async () => {
      try {
          await updateDoc(doc(collectionRef, id), {
              provience: data.provience,
              currentaddress: data.address,
              houseno: data.houseno,
              lastUpdated: serverTimestamp()
          })
          
          toast.success("KYC Form has submitted")
      } catch (error) {
          alert(`Data was now added, ${error.message}`)
      }
  }, [])
}

const handleInput = (e) => {
  const id = e.target.id;
  const value = e.target.value;

  setData({ ...data, [id]: value });
};




  return (
    <div className='KycUserNoti'>
     {
          kycform && 
          <div>
            <div className='background' onClick={()=>setKycForm(false)}>

            </div>
          <div className='KycForm'>
            <h1>KYC Form</h1>
            <p>Please fill in all the details.</p>
            <div className='personalinfo'>
               <h1>Personal Information</h1>
               <div className='Fields'>
               <div className='informationfields'>
                <h2>Name</h2>
                <input type="text" value={`${username}`}/>
               </div>
               <div className='informationfields'>
                <h2>Email Address</h2>
                <input type="text"  value={`${email}`}/>
               </div>
               </div>
            </div>
            <div className='personalinfo'>
               <h1>Address</h1>
               <div className='Fields'>
               <div className='informationfields'>
                <h2>Province No.</h2>
                <input type="text" onChange={handleInput} id='provience'/>
               </div>
               <div className='informationfields'>
                <h2>Current Address</h2>
                <input type="text" onChange={handleInput} id='address' />
               </div>
               <div className='informationfields'>
                <h2>House No</h2>
                <input type="text" onChange={handleInput} id='houseno'/>
               </div>
               </div>
            </div>
            <div className='personalinfo'>
               <h1>Documents</h1>
               <div className='Fields'>
               <div className='informationfields'>
                <h2>Citizenship No</h2>
                <input type="number"/>
               </div>
               <div className='informationfields'>
                <h2>Issued Date</h2>
                <input type="date" />
               </div>
               </div>
            </div>
          </div>
          </div>
        }
     {
      kycfilled && 
      <div className='kycFormTop'>
      <img src="img/speak.png" alt="" />
      <p>Start managing your bills with AquaBill. Complete <span onClick={() => setKycForm(true)}>Your KYC</span>  Form Today!</p>
    </div>
     }   

    
   
    <div className='users'>
      <Sidebar/>
      <Bills user={props.user} data={props.data} username={username} email={email}/>
    </div>
    </div>
  )
}
