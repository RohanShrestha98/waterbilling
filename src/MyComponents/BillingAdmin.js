import React from 'react'
import LeftDashboard from './LeftDashboard'
import LeftSuperAdminDashboard from './LeftSuberAdminDashboard'
import RightDashboard from './RightDashboard'

export default function BillingAdmin() {
  return (
    <div className='SuperAdminDashboard'>
      <LeftSuperAdminDashboard />
     <RightDashboard/>
    </div>
  )
}
