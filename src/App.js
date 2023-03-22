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
import DataTable from "./MyComponents/DataTable";
import DataList from "./MyComponents/DataList";

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
          <Route path="/" element={<LoginEmail/>}/>
          <Route path="/data" element={<DataList/>}/>
          <Route path="/signup" element={<RequiredAuth><PhoneSignup/></RequiredAuth> }/>
          <Route path="/userdetails" element={<UserDetails />}/>
          <Route path="/userpage" element={<UserDetails />}/>
          <Route path="/login" element={<SuperAdminLogin />}/>
          <Route path="/addadmin" element={<AddAdmin inputs={userInputs} title="Assign Admin" />}/>
          <Route path="/workinprogress" element={<WorkInProgress />}/>
          <Route path="/superadminlogin" element={<SuperAdminDashboard />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
