import React from 'react'
import LeftDashboard from './LeftDashboard'
import LeftSuperAdminDashboard from './LeftSuberAdminDashboard'
import RightDashboard from './RightDashboard'

export default function BillingCustomer() {
  return (
    <div className='SuperAdminDashboard'>
      <LeftSuperAdminDashboard />
     <RightDashboard/>
     hello
    </div>
  )
}
