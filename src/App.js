import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PhoneSignup from "./MyComponents/PhoneSignup";
import UserDetails from "./MyComponents/UserDetails";
import { ToastContainer } from "react-toastify";
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

function App() {
  const { currentUser } = useContext(AuthContext);

const RequiredAuth = ({ children }) => {
  return currentUser ? children : <Navigate to="/login" />;
};
const auth1 = getAuth();
const user1 = auth.currentUser;

const [user, setUser] = useState(null);
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

// useEffect(()=>{
//   if (user) {
//    db.collection('proviencetwo').doc(user.uid).get().then(doc=>{
//     console.log(doc)
//     const data = doc.data()
//     console.log("data",data)
//    })
//   } else {
//     console.log("erroe")
//   }
// });
const [info , setInfo] = useState([]);

const Fetchdata = ()=>{
  db.collection("proviencetwo").doc(user.id).get().then((docs) => {
    console.log("docsdocs")
    const data = doc.data()
    setInfo(data)
  })
}
console.log(info)
useEffect(()=>{
   if (user){
    Fetchdata()
   }
},[]) 

// if (user1 !== null) {
//   user1.providerData.forEach((profile) => {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }




// useEffect(() => {
//   async function fetchData() {
//     try {
//       const collectionRef = db.collection('normaluser');
//       const snapshot = await collectionRef.get();
//       const data = snapshot.docs.map(doc => doc.data());
//       console.log("Data:", data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   if (user && db) {
//     console.log("Fetching data...");
//     fetchData();
//   } else {
//     console.log("User is not logged in or db is not defined.");
//   }
  
// }, [user, db]);


// useEffect(()=>{
//   const usersRef =  db.collection('normaluser');
//     usersRef.doc('1EYim3JRMKanZVAlCBhouCU0Djz2').get()
//   .then((doc) => {
//     if (doc.exists) {
//       console.log('Document data:', doc.data());
//     } else {
//       console.log('No such document!');
//     }
//   })
//   .catch((error) => {
//     console.log('Error getting document:', error);
//   });
// },[])

const [data, setData] = useState([]);

useEffect(() => {
  const unsub = onSnapshot(
    collection(db,`users` ),
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



// filter the data for the user with the matching ID


// const fetchData = async () => {
//   if(user){
//     const querySnapshot = await db.collection('normaluser').doc("1EYim3JRMKanZVAlCBhouCU0Djz2").get();
//     const details = querySnapshot.data()
//     setData("Rohan");
//   }
  
// };
// useEffect(()=>{
//   if (user) {
//     setData("Rohan");
//   }
// })
// useEffect(() => {
//   if (user) {
//     const fetchData = async () => {
//         const querySnapshot = await db.collection('normaluser').doc("1EYim3JRMKanZVAlCBhouCU0Djz2").get();
//         const details = querySnapshot.data()
//         setData(details);
//     };
//     fetchData();
//   }
// }, [user]);
// useEffect(() => {
//   if(user){
//     FirebaseAdmin.auth()
//       .getUser(user.uid)
//       .then((userRecord) => {
//         // See the UserRecord reference doc for the contents of userRecord.
//         console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//       })
//       .catch((error) => {
//         console.log('Error fetching user data:', error);
//       });
//   }
// }, [user]);
// console.log(data);
console.log(currentUser);

  return (
    <Router>
        <ToastContainer/>
      <div className="App">
        <Routes>
          <Route path="/" element={!currentUser ? <Home/>:<Userpage user={user} data={data} currentUser={currentUser}/>}/>
          <Route path="/downloadpdf" element={<DownloadPdf/>}/>
          <Route path="/invoicedetails" element={<InvoiceDetails/>}/>
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
