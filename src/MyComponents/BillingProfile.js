import React from 'react'
import LeftDashboard from './LeftDashboard'
import WorkInProgress from './WorkInProgress'
import "./style.css"

export default function BillingProfile() {
  return (
    <div className='SuperAdminDashboard'>
      <LeftDashboard/>
      <div className='rightDashboard' >


        <p style={{ marginBottom: '50px' }}>Back </p>
        <div className="container">
      <img src={'/image/Admin profile.jpg'} alt='' />
      </div>
      <div className='sty' style={{ marginBottom: '40px' }}>
        <div><p className='sam' style={{ marginBottom: '5px' }}>Samir Shrestha</p>
        <p>samirshrs27@gmail.com</p>
        </div>  
        <p>Edit</p>
        <p>Delete</p>
      </div>
      <div className='name' >
        <p className='sani' >Full Name</p>
        <p>Samir Shrestha</p>
        <div>
            <p>Phone Number</p>
            <p>9823379996</p>
        </div>
      </div>
    </div>
        
        
      
      
      </div>
    

      )
  }
