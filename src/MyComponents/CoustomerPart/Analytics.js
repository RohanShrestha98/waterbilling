import React, { useState } from "react";
import "./coustomer.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../style.css";
import Kyc from "./Kyc";
import BottomNavigation from "./BottomNavigation";

export default function Analytics(props) {
  const [animate, setAnimate] = useState(false);

  // const handleClick = () => {
  //   setAnimate(true);
  // };
  return (
    <div className="KycUserNoti">
      <Kyc
        username={props.username}
        kycfilled={props.kycfilled}
        email={props.email}
        citizenshipback={props.citizenshipback}
      />
      <div className="users">
        <Sidebar />
        <div className="rightUserPart">
          <Header
            name={"Anylatics"}
            shownotification={props.shownotification}
            user={props.user}
            data={props.data}
            username={props.username}
            email={props.email}
          />
          <div className="analytics">
            <div className="analyticsLeft">
              <h1>Analytics</h1>
              <div className="filtermonth">
                <img src="img/calendar.png" alt="" />
                <p>This Month</p>
                <img src="img/arrowdown.png" alt="" />
              </div>
            </div>
            <div className="container">
              <div className="containerwave">
              <h3>WATER USAGE</h3>
                <div class="wave-container">
                  
                  <div class="wave"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
