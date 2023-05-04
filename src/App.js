import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PhoneSignup from "./MyComponents/PhoneSignup";
import UserDetails from "./MyComponents/UserDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import SuperAdminDashboard from "./MyComponents/SuperAdminDashboard";
import Home from "./MyComponents/Home";
import SuperAdminLogin from "./MyComponents/SuperAdminLogin";
import WorkInProgress from "./MyComponents/WorkInProgress";
import LoginEmail from "./MyComponents/LoginEmail";
import { useContext } from "react";
import { AuthContext } from "./MyComponents/AuthContext";
import AddAdmin from "./MyComponents/AddAdmin";
import { userInputs } from "./FormInput";
import DataTable from "./MyComponents/DataTableUser";
import DataList from "./MyComponents/DataList";
import BillingAdmin from "./MyComponents/BillingAdmin";
import AdminDashboard from "./MyComponents/AdminDashboard";
import UserLogin from "./MyComponents/UserLogin";
import Notification from "./MyComponents/Notification";
import Coustomer from "./MyComponents/Coustomer";
import Invoice from "./MyComponents/Invoice";
import Revenue from "./MyComponents/Revenue";
import DownloadPdf from "./MyComponents/DownloadPdf";
import InvoiceDetails from "./MyComponents/InvoiceDetails";
import VerifyOtp from "./MyComponents/VerifyOtp";
import Userpage from "./MyComponents/Userpage";
import Crud from "./MyComponents/Crud";
import CrudForm from "./MyComponents/CrudForm";
import { useState, useEffect } from 'react';
import { auth, db } from "./MyComponents/Firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Users from "./MyComponents/CoustomerPart/Users";
import Bills from "./MyComponents/CoustomerPart/Bills";
import Home2 from "./MyComponents/CoustomerPart/Home";
import Analytics from "./MyComponents/CoustomerPart/Analytics";
import AddPost from "./MyComponents/AddPost";
import Profile from "./MyComponents/CoustomerPart/Profile";

function App() {
  const { currentUser } = useContext(AuthContext);

const RequiredAuth = ({ children }) => {
  return currentUser ? children : <Navigate to="/login" />;
};
const auth1 = getAuth();
const user1 = auth.currentUser;

const [user, setUser] = useState(null);
const [user2, setUser2] = useState({});
const [username, setUsername] = useState("");
const [citizenshipback, setCitizenshipback] = useState("");
const [email, setEmail] = useState("");
const [id, setId] = useState("");
const [data, setData] = useState([]);
// const [data, setData] = useState({});

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      setUser(user);
     
    } else if(user != null){
      db.collection('proviencetwo').doc(user.uid).get().then(doc=>{
        const data = doc.data()
        console.log("data",data)
       })
    } else {
      setUser(null);
    }
  });
  return unsubscribe;
}, []);


useEffect(() => {
  if (user) {
    const userId = user.uid;
    const user2 = data.find((u) => u.id === userId);
    console.log("user2", user2);
    setUser2(user2 || {});
  } else {
    console.log("error");
  }
}, [data, user]);

console.log("headerusers", user2);

useEffect(() => {
  if (user2) {
    const { username } = user2;
    const { email } = user2;
    const { id } = user2;
    const { citizenshipback } = user2;
    setUsername(username);
    setCitizenshipback(citizenshipback);
    setId(id);
    console.log(username);
    setEmail(email);
  } else {
  }
}, [user2]);
// update localStorage whenever the user2 state changes
useEffect(() => {
  console.log("Setting user2 to localStorage app:", user2);
  localStorage.setItem("user2", JSON.stringify(user2));
}, [user2]);

// retrieve user data from localStorage when the component mounts
useEffect(() => {
  const storedUser = localStorage.getItem("user2");

  if (storedUser) {
    setUser2(JSON.parse(storedUser ?? "{}"));
  }
}, []);





useEffect(() => {
  const unsub = onSnapshot(
    collection(db,`user` ),
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    },
    (error) => {
      console.log(error);
    }
  );

  // return a cleanup function to unsubscribe from the real-time updates
  return () => {
    unsub();
  };
}, []);
const [kycfilled, setkycfilled] = useState(true);

useEffect(()=>{
  if(user2.citizenshipback){
    setkycfilled(false)
  }
})

console.log(currentUser);

const allbills = [
  {
      id:"1",
      name:"Bill 123",
      date:"May 3, 2023",
      price:"Rs 220"
  },
  {
      id:"1",
      name:"Bill 122343",
      date:"Jan 3, 2023",
      price:"Rs 240"
  },
  {
      id:"1",
      name:"Bill 123423",
      date:"Apr 3, 2023",
      price:"Rs 190"
  },
  {
      id:"1",
      name:"Bill 123",
      date:"May 3, 2023",
      price:"Rs 220"
  },
  {
      id:"1",
      name:"Bill 123",
      date:"May 3, 2023",
      price:"Rs 220"
  },
  {
      id:"1",
      name:"Bill 122343",
      date:"Jan 3, 2023",
      price:"Rs 240"
  },
  {
      id:"1",
      name:"Bill 123423",
      date:"Apr 3, 2023",
      price:"Rs 190"
  },
  {
      id:"1",
      name:"Bill 123",
      date:"May 3, 2023",
      price:"Rs 220"
  },
  {
      id:"1",
      name:"Bill 123",
      date:"May 3, 2023",
      price:"Rs 220"
  }
]
const [bills,setBills]=useState([])
const [message,setMessage]=useState(false)

useEffect(()=>{
  if(user2 && user2.lastUpdated){
    const time = user2.lastUpdated
  const date2 = time.toDate()
const currentDate = new Date();
const timeDiff = currentDate.getTime() - date2.getTime();
const monthsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
// const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 ));
if(monthsDiff===1){
  const slicedData = allbills.slice(0, 1);
  setBills(slicedData)
  setMessage(false)
}else if(monthsDiff===2){
  const slicedData = allbills.slice(0, 2);
  setBills(slicedData)
  setMessage(false)
}else if(monthsDiff===3){
  const slicedData = allbills.slice(0, 3);
  setBills(slicedData)
  setMessage(false)
}
else if(monthsDiff===4){
  const slicedData = allbills.slice(0, 4);
  setBills(slicedData)
  setMessage(false)
}
else if(monthsDiff===5){
  const slicedData = allbills.slice(0, 5);
  setBills(slicedData)
  setMessage(true)
}
else if(monthsDiff===6){
  const slicedData = allbills.slice(0, 6);
  setBills(slicedData)
  setMessage(true)
}
else if(monthsDiff===7){
  const slicedData = allbills.slice(0, 7);
  setBills(slicedData)
  setMessage(true)
}
else if(monthsDiff===8){
  const slicedData = allbills.slice(0, 8);
  setBills(slicedData)
  setMessage(true)
}
else if(monthsDiff===9){
  const slicedData = allbills.slice(0, 9);
  setBills(slicedData)
  setMessage(true)
}
else{
  const slicedData = allbills.slice(0, 0);
  setBills(slicedData)
  setMessage(true)
}
}
// const getNextMonthDate = () => {
//   const time = user2.lastUpdated
//   const date = time.toDate();
//   date.setMonth(date.getMonth() + 1);
  
// console.log("date",date)
//   return date;
// };
},[user2,user2.lastUpdated])


const [click,setClick]=useState(false)
  const DisplayTost =()=>{
    toast.success("Payment Successfull")
    setClick(true)
  }

  return (
    <Router>
        <ToastContainer/>
      <div className="App">
        <Routes>
          <Route path="/" element={!currentUser ? <Home/>:<Home2 user={user} click={click} DisplayTost={DisplayTost} kycfilled={kycfilled} data={data} address={user2.currentaddress} provience={user2.provience} username={user2.username} message={message} id={user2.id} email={user2.email} citizenshipback={user2.citizenshipback} currentUser={currentUser}/>}/>
          {/* <Route path="/" element={!currentUser ? <Home/>:<Userpage user={user} data={data} currentUser={currentUser}/>}/> */}
          <Route path="/downloadpdf" element={<DownloadPdf/>}/>
          <Route path="/bills" element={<Bills user={user} message={message} DisplayTost={DisplayTost} click={click} bills={bills} data={data} id={user2.id} address={user2.currentaddress} provience={user2.provience} username={user2.username} user2={user2} time={user2.lastUpdated} email={user2.email} citizenshipback={user2.citizenshipback} currentUser={currentUser}/>}/>
          <Route path="/profile" element={<Profile user={user}  data={data} houseno={user2.houseno} address={user2.currentaddress} provience={user2.provience} username={user2.username} email={user2.email} id={user2.id} citizenshipback={user2.citizenshipback} phone={user2.phone} citizenshipno={user2.citizenshipno}  currentUser={currentUser}/>}/>
          <Route path="/analytics" element={<Analytics user={user} data={data} address={user2.currentaddress} provience={user2.provience} username={user2.username} email={user2.email} citizenshipback={user2.citizenshipback} currentUser={currentUser}/>}/>
          <Route path="/invoicedetails" element={<InvoiceDetails/>}/>
          <Route path="/addpost" element={<AddPost/>}/>
          <Route path="/adminlogin" element={<LoginEmail/>}/>
          <Route path="/notifications" element={<Notification/>}/>
          <Route path="/customers" element={<Coustomer/>}/>
          <Route path="/invoice" element={<Invoice/>}/>
          <Route path="/revenue" element={<Revenue/>}/>
          <Route path="/data" element={<DataList/>}/>
          <Route path="/phonesignup" element={<PhoneSignup/>}/>
          <Route path="/verifyotp" element={<VerifyOtp/>}/>
          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          <Route path="/billingadmin" element={<BillingAdmin/>}/>
          <Route path="/signup" element={<PhoneSignup/> }/>
          <Route path="/createuseraccount" element={<UserDetails />}/>
          <Route path="/userlogin" element={<UserLogin />}/>
          <Route path="/superadminlogin" element={<SuperAdminLogin />}/>
          <Route path="/addadmin" element={<AddAdmin inputs={userInputs} title="Assign Admin" />}/>
          <Route path="/workinprogress" element={<WorkInProgress />}/>
          <Route path="/superadmindashboard" element={<SuperAdminDashboard />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
