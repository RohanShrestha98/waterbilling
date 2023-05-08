import React from 'react'
import LeftDashboard from './LeftDashboard'
import WorkInProgress from './WorkInProgress'
import DataTable from './DataTableUser'
import { Link } from 'react-router-dom'

export default function Invoice() {
  return (
    <div className='SuperAdminDashboard'>
      <LeftDashboard/>
      <div className='rightDashboard'>
      <div className='invoice' style={{ marginBottom: '40px' }} >
          <h3>Invoices</h3>
        </div>
        <div className='stats' > 
        <h4> Invoice Statiscs</h4>
        <p className='today'>Today</p>
        </div>
        <div className='small' style={{ marginBottom: '40px' }}>Here's your report for today </div>

        
        <div className='rs' style={{ marginBottom: '40px' }}>
        <div className='col' >
        <h5>Received revenue (in Rs) </h5>
        <p className='num'>3,220</p>
        <p className='s'>Pending 1,500</p>
        </div>
        <div className='col' >
        <h6>No. of Invoices</h6>
        <p className='num'>12</p>
        <p className='s'>Pending 5</p>
       </div>
      </div>
      <div className='dummyInvoice'>
       <Link to="/invoicedetails" style={{textDecoration:"none"}}> <p>Dummy Invoice</p>
       </Link>
      </div>
      <DataTable table={"3"}/>
      </div>
    </div>
  )
}
