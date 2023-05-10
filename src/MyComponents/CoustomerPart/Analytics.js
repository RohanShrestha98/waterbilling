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
            lengthNotification={props.lengthNotification}
          />

{
             !props.kycfilled ? <>
{
            props.analytics ?
            <>
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
                <p>Prev. month: 1,763 litres</p>
              </div>
              <div className="waterpeak">
                <div className="waterusage">
                  <h1>AVG. WATER USAGE</h1>
                  <p>per day</p>
                  <div className="usages">
                    <h2>70 ltrs</h2>
                    <img src="img/waterusage.png" alt="" />
                  </div>
                </div>
                <div className="waterusage">
                <h1>PEAK DAY</h1>
                  <p>per week</p>
                  <div className="usages">
                    <h2>Sun</h2>
                    <img src="img/calendar1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>:
          <div className='billdetails nobilldetails'>
             <p className='message'>No thing to show</p>
          </div>
          
        }
             </>:
          <div className='billdetails nobilldetails'>
             <p className='message'>No thing to show</p>
          </div>
        }
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
