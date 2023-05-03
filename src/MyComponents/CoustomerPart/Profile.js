import React from "react";
import "./coustomer.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../style.css";
import { useRef } from "react";
import html2canvas from "html2canvas";
import Kyc from "./Kyc";

export default function Profile(props) {
  const divRef = useRef(null);

  function downloadDivContent() {
    const contentDiv = divRef.current;
    html2canvas(contentDiv).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "content.png";
      link.href = imgData;
      link.click();
    });
  }
  const billdetails = [
    {
      id: "1",
      title: "Billing ID:",
      details: "78672304",
    },
    {
      id: "1",
      title: "Coustomer Name:",
      details: props.username,
    },
    {
      id: "1",
      title: "Billing Address:",
      details: props.address,
    },
    {
      id: "1",
      title: "Provience No:",
      details: `Provience No ${props.provience}`,
    },
    {
      id: "1",
      title: "Water Usage:",
      details: "300 cubic meter",
    },
    {
      id: "1",
      title: "Water Cost:",
      details: "Rs 590",
    },
    {
      id: "1",
      title: "Due Date:",
      details: "29th Feb, 2023",
    },
    {
      id: "1",
      title: "Additional Charges:",
      details: "Rs 0",
    },
  ];

  const profileInfo = [
    {
      id: "1",
      title: "Name",
      info: props.username,
    },
    {
      id: "1",
      title: "Phone",
      info: props.phone,
    },
    {
      id: "1",
      title: "Email",
      info: props.email,
    },
    {
      id: "1",
      title: "CitizenShip No",
      info: props.citizenshipno,
    },
  ];

  const addressInfo = [
    {
      id: "1",
      title: "City",
      info: props.address,
    },
    {
      id: "1",
      title: "Provience",
      info: `Provience no ${props.provience}`,
    },
    {
      id: "1",
      title: "House No",
      info: props.houseno,
    },
  ];
  return (
    <div className="KycUserNoti">
      <Kyc
        username={props.username}
        email={props.email}
        kycfilled={props.kycfilled}
        citizenshipback={props.citizenshipback}
      />
      <div className="users">
        <Sidebar />
        <div className="rightUserPart">
          <Header
            name={"Profile"}
            user={props.user}
            data={props.data}
            username={props.username}
            email={props.email}
          />
          <div className="profileInformation">
            <h1>My Profile</h1>
            <div className="ImageNameEdit">
              <div className="ImageName">
                <img src="img/profile.jpg" alt="" />
                <h2>{props.username}</h2>
              </div>
              <button>Edit</button>
            </div>
            {props.citizenshipback && (
              <>
                <div className="personalInformation">
                  <h2>Personal Information</h2>
                  <div className="personalinfo">
                    {profileInfo.map((items) => (
                      <div key={items.id} className="personalInformationone">
                        <p>{items.title}</p>
                        <h2>{items.info}</h2>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="personalInformation">
                  <h2>Address </h2>
                  <div className="personalinfo">
                    {addressInfo.map((items) => (
                      <div key={items.id} className="personalInformationone">
                        <p>{items.title}</p>
                        <h2>{items.info}</h2>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
