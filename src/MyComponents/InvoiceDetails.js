import React from "react";
import LeftSuperAdminDashboard from "./LeftSuberAdminDashboard";
import "./style.css";
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import LeftDashboard from "./LeftDashboard";
import { Link } from "react-router-dom";

export default function InvoiceDetails() {
    const divRef = useRef(null);

  function downloadDivContent() {
    const contentDiv = divRef.current;
    html2canvas(contentDiv).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'content.png';
      link.href = imgData;
      link.click();
    });
  }
    const billdetails = [
        {
            id:"1",
            title:"Billing ID:",
            details:"78672304"
        },
        {
            id:"1",
            title:"Coustomer Name:",
            details:"Samir Shrestha"
        },
        {
            id:"1",
            title:"Billing Address:",
            details:"78672304"
        },
        {
            id:"1",
            title:"Billing Address:",
            details:"Dhapasi, Kathmandu"
        },
        {
            id:"1",
            title:"Provience No:",
            details:"Provience No 1"
        },
        {
            id:"1",
            title:"Water Usage:",
            details:"300 cubic meter"
        },
        {
            id:"1",
            title:"Water Cost:",
            details:"Rs 590"
        },
        {
            id:"1",
            title:"Due Date:",
            details:"29th Feb, 2023"
        },
        {
            id:"1",
            title:"Additional Charges:",
            details:"Rs 0"
        }
    ]
  return (
    <div className="SuperAdminDashboard">
      <LeftDashboard />
      <div className="rightDashboard">
      <div className="verifynumber">
          <Link to={"/invoice" } style={{textDecoration:"none"}}>  <h3><img src="img/back.png" alt="" /> Back</h3></Link></div>
        <div  className="invoiceDetails">
          <h2>Bill Details</h2>
          <div className="detailsname">
            <p>Billed by:</p>
            <img src="img/profile.jpg" alt="" />
            <h3>Rohan Shrestha</h3>
          </div>
          <div className="detailsname">
            <p>Bill Status:</p>
            <h4>Pending</h4>
          </div>
          <div ref={divRef} className="billdetails">
            <div className="issueDatesLogo">
                <div className="issueLogo">
                    <img src="img/logo.png" alt="" />
                    <h3>Save Water, Save Life</h3>
                </div>
                <div className="issuedate">
                    <h3>Issued Date</h3>
                    <h2>Feb 18, 2023</h2>
                </div>
            </div>
            <div className="actualbillDetails">
                {
                    billdetails.map((items)=>(
                        <div key={items.id} className="billingLine">
                            <h1>{items.title}</h1>
                            <p>{items.details}</p>
                        </div>
                    ))
                }
            </div>
            <div className="totalAmount">
                <h1>Total Cost</h1>
                <h2>Rs 590</h2>
            </div>
          </div>
          <p className="downloadbutton" onClick={downloadDivContent}>Download PNG</p>
          </div>
          
        </div>
      </div>
  );
}
