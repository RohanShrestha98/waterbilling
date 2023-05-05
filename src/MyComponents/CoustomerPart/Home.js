import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./coustomer.css";
import Sidebar from "./Sidebar";
import Kyc from "./Kyc";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { db } from "../Firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Home2(props) {
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "post"),
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

    return () => {
      unsub();
    };
  }, []);
  return (
    <div className="KycUserNoti">
      <Kyc
        username={props.username}
        id={props.id}
        kycfilled={props.kycfilled}
        email={props.email}
        citizenshipback={props.citizenshipback}
      />
      <div className="users">
        <Sidebar />
        <div className="rightUserPart">
          <Header
            name={"Home"}
            user={props.user}
            data={props.data}
            username={props.username}
            email={props.email}
          />
          <div className="allbills">
            <div className="PostsShow">
              <div>
                {data.map((items) => (
                  <div className="singlePost">
                    <div className="profilename">
                      <img src="img/ab.png" alt="" />
                      <div className="nameTime">
                        <h2>
                          AquaBill <img src="img/bluetick.png" alt="" />{" "}
                        </h2>
                        <p>123247</p>
                      </div>
                    </div>
                    <p className="description">{items.desc}</p>
                    <img src={items.img} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div  className="coustomerbill">
        {
             !props.kycfilled ? <>
{
            !props.message ?
            <>
             {
                props.bills.slice(0, 1).map((items)=>(
            <div  className="billdetails2">
                
                <div className='billdetails1'>

               
            <div className="issueDatesLogo">
                <div className="issueLogo">
                    <img src="img/logo.png" alt="" />
                    <h3>Save Water, Save Life</h3>
                </div>
                <div className="issuedate">
                    <h3>Issued Date</h3>
                    <h2>{items.date}</h2>
                </div>
            </div>
            <div className="actualbillDetails">
              
                    <div key={items.id} className="billingLine billingLine1">
                            <h1>{items.title}</h1>
                            <p>{items.details}</p>
                            <h1>{items.title2}</h1>
                            <p>{items.details2}</p>
                            <h1>{items.title3}</h1>
                            <p>{items.details3}</p>
                            <h1>{items.title4}</h1>
                            <p>{items.details4}</p>
                            <h1>{items.title5}</h1>
                            <p>{items.details5}</p>
                            <h1>{items.title6}</h1>
                            <p>{items.details6}</p>
                            <h1>{items.title7}</h1>
                            <p>{items.details7}</p>
                            <h1>{items.title8}</h1>
                            <p>{items.details8}</p>
                            <h1>{items.title9}</h1>
                            <p>{props.click?"Paid":"Pending"}</p>
                        </div>
            </div>
            <div className="totalAmount">
                <h1>Total Cost</h1>
                <h2>{items.details6}</h2>
            </div>
            </div>
            {
             props.click ? <button>Payment Done</button>: <button onClick={props.DisplayTost}>Pay Now</button>
                  }
          </div>
          ))

        }
          </>:
          <div className='billdetails nobilldetails'>
             <p className='message'>No bills to show</p>
          </div>
          
        }
             </>:
          <div className='billdetails nobilldetails'>
             <p className='message'>No bills to show</p>
          </div>
        }
        
          
        {/* <p className="downloadbutton" onClick={downloadDivContent}>Download PNG</p> */}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
