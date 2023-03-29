import React from 'react'
import LeftDashboard from './LeftDashboard'
import RightAdminDashboard from './RightAdminDashboard'

export default function AdminDashboard() {
  return (
    <section className="SuperAdminDashboard">
          <LeftDashboard />
          <RightAdminDashboard title={"Admin Dashboard"}/>
        </section>
  )
}
