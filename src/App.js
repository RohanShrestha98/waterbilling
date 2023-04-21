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

function App() {
  const {currentUser} = useContext(AuthContext)
  const RequiredAuth =({childern})=>{
    return currentUser ? (childern):<Navigate to="/login"/>
  }
  console.log(currentUser)
  return (
    <Router>
        <ToastContainer/>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/userpage" element={<Userpage/>}/>
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
