import React from 'react'
import LeftDashboard from './LeftDashboard'
import WorkInProgress from './WorkInProgress'
import BillReading from './BillReading'
export default function Invoice() {
  return (
    <div className='SuperAdminDashboard'>
      <LeftDashboard/>
      {/* <BillReading /> */}
      <WorkInProgress/>  
    </div>
  )
}
