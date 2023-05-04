import React from 'react'
import "./coustomer.css"
import Header from './Header'
import Sidebar from './Sidebar';
import "../style.css";
import Kyc from './Kyc';

export default function Analytics(props) {
  return (
       <div className="KycUserNoti">
      <Kyc username={props.username} kycfilled={props.kycfilled} email={props.email} citizenshipback={props.citizenshipback}/>
    <div className="users">
    <Sidebar />
    <div className='rightUserPart'>
     <Header name={"Anylatics"} user={props.user} data={props.data} username={props.username} email={props.email}/>
    
    </div>
  </div>
  </div>
  )
}
