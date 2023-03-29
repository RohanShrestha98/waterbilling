import React from 'react'
import LeftDashboard from './LeftDashboard'
import WorkInProgress from './WorkInProgress'

export default function Coustomer() {
  return (
    <div className='SuperAdminDashboard'>
      <LeftDashboard/>
      <WorkInProgress/>  
    </div>
  )
}
