import React from 'react'
import LeftDashboard from './LeftDashboard'
import LeftSuperAdminDashboard from './LeftSuberAdminDashboard'
import RightSuperAdminDashboard from './RightSuperAdminDashboard'

export default function SuperAdminDashboard() {
  return (
    <div>
      <section className="SuperAdminDashboard">
          <LeftSuperAdminDashboard />
           <RightSuperAdminDashboard title={"Super Admin Dashboard"}/>
        </section>
    </div>
  )
}
