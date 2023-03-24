import React from 'react'
import LeftDashboard from './LeftDashboard'
import LeftSuperAdminDashboard from './LeftSuberAdminDashboard'

export default function SuperAdminDashboard() {
  return (
    <div>
      <section className="SuperAdminDashboard">
          <LeftSuperAdminDashboard />
          <section className="rightDashboard">
           
          </section>
        </section>
    </div>
  )
}
