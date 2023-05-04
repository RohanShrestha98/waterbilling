import React, { useEffect, useState } from 'react'
import "./coustomer.css"
import Header from './Header'
import Sidebar from './Sidebar';
import "../style.css";
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import Kyc from './Kyc';
import { toast } from 'react-toastify';

export default function Bills(props) {
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
            details:props.username
        },
        {
            id:"1",
            title:"Billing Address:",
            details:props.address
        },
        {
            id:"1",
            title:"Provience No:",
            details:`Provience No ${props.provience}`
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
        ,
        {
            id:"1",
            title:"Status:",
            details:props.click?"Paid":"Pending"
        }
    ]
    const [view,setView]=useState('all')
   

   
  return (
    <div className="KycUserNoti">
      <Kyc username={props.username} email={props.email} kycfilled={props.kycfilled} citizenshipback={props.citizenshipback}/>
    <div className='users'>
    <Sidebar/>
    <div className='rightUserPart'>
    <Header name={"Bills"} user={props.user} data={props.data} username={props.username} email={props.email}/>
    <div className='allbills'>
      <div className='previousBill'>
        <h1>My Bills</h1>
        <div className='billstitle'>
        <div  onClick={()=>setView('all')}><p className={view==='all'?"billstitlehover":"billstitlehoverp"} >All</p></div>
        
        <p className={view==='pending'?"billstitlehover":"billstitlehoverp"} onClick={()=>setView('pending')}>Pending</p>
        <p className={view==='overdue'?"billstitlehover":"billstitlehoverp"} onClick={()=>setView('overdue')}>Overdue</p>
        <p className={view==='paid'?"billstitlehover":"billstitlehoverp"} onClick={()=>setView('paid')}>Paid</p>
        </div>
        {
            view==='all' ?
            <div className='totalbills'>
                {
                    props.bills.map((items)=>(
                        <div key={items.id} className='alltotalbills'>
                        <div className='billnameDate'>
                            <h2>{items.name}</h2>
                            <p>{items.date}</p>
                        </div>
                        <h1>{items.price}<i class="fa-solid fa-angle-right"></i></h1>
                    </div>
                    ))
                }

                {
                    props.message && <p className='message'>No bills to show</p>
                }
               
            </div>
            :view==='pending'?
            <>
                {
                    props.message ? <p className='message'>No bills to show</p> : <div className='totalbills'>
                    {
                        !props.click ? <>
                        {
                props.bills.map((items)=>(
                    <div key={items.id} className='alltotalbills'>
                    <div className='billnameDate'>
                        <h2>{items.name}</h2>
                        <p>{items.date}</p>
                    </div>
                    <h1>{items.price}<i class="fa-solid fa-angle-right"></i></h1>
                </div>
                ))
            }
                        </> :<p className='message'>No Pending bills to show</p>
                    }
               

            </div>
                }

               
            </>
            :view==='overdue'?
            <>
                {
                    props.message ? <p className='message'>No bills to show</p> : <div className='totalbills'>
                    {
                        !props.click ? <>
                        {
                props.bills.map((items)=>(
                    <div key={items.id} className='alltotalbills'>
                    <div className='billnameDate'>
                        <h2>{items.name}</h2>
                        <p>{items.date}</p>
                    </div>
                    <h1>{items.price}<i class="fa-solid fa-angle-right"></i></h1>
                </div>
                ))
            }
                        </> :<p className='message'>No Overdue bills to show</p>
                    }
               

            </div>
                }

               
            </>
            :<div className='totalbills'>
            {
                props.bills.map((items)=>(
                    <div key={items.id} className='alltotalbills'>
                    <div className='billnameDate'>
                        <h2>{items.name}</h2>
                        <p>{items.date}</p>
                    </div>
                    <h1>{items.price}<i class="fa-solid fa-angle-right"></i></h1>
                </div>
                ))
            }

            {
                props.message && <p className='message'>No bills to show</p>
            }
           
        </div>
        }
       

      </div>
    <div  className="coustomerbill">
        {
            !props.message ?<div ref={divRef} className="billdetails">
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
            {
                    props.click ? <button>Payment Done</button>: <button onClick={props.DisplayTost}>Pay Now</button>
                  }
          </div>:
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
  )
}
