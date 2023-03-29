import React from 'react'
import LeftDashboard from './LeftDashboard'
import LeftSuperAdminDashboard from './LeftSuberAdminDashboard'
import RightAdminDashboard from './RightAdminDashboard'

export default function SuperAdminDashboard() {
  return (
    <div>
      <section className="SuperAdminDashboard">
          <LeftSuperAdminDashboard />
           <RightAdminDashboard title={"Super Admin Dashboard"}/>
        </section>
    </div>
  )
}
