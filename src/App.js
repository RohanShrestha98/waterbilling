import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PhoneSignup from "./MyComponents/PhoneSignup";
import UserDetails from "./MyComponents/UserDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import SuperAdminDashboard from "./MyComponents/SuperAdminDashboard";
import Home from "./MyComponents/Home";
import SuperAdminLogin from "./MyComponents/SuperAdminLogin";
import WorkInProgress from "./MyComponents/WorkInProgress";

function App() {
  return (
    <Router>
        <ToastContainer/>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<PhoneSignup/>}/>
          <Route path="/userdetails" element={<UserDetails />}/>
          <Route path="/userpage" element={<UserDetails />}/>
          <Route path="/login" element={<SuperAdminLogin />}/>
          <Route path="/workinprogress" element={<WorkInProgress />}/>
          <Route path="/superadminlogin" element={<SuperAdminDashboard />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
