import React from 'react'
import LeftDashboard from './LeftDashboard'
import WorkInProgress from './WorkInProgress'
import "./style.css"

export default function Invoice() {
  return (
    <div className='SuperAdminDashboard'>
      <LeftDashboard/>
      <div className="rightDashboard">
        <div className='invoice' style={{ marginBottom: '40px' }} >
          <h3>Invoices</h3>
          <p>Send</p>
          
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
      <div className='Transactions' style={{marginBottom : '20px'}}>
        <h7>Recent Transactions</h7>
        <p>+Filter</p>
      </div>
      <div style={{ paddingLeft: '20px' }}>
      <table>
  <thead >
    <tr>
      <th style={{ paddingLeft: '30px' }}>Bill ID</th>
      <th style={{ paddingLeft: '80px' }}>Customer Name</th>
      <th style={{ paddingLeft: '80px' }}>Billing Date</th>
      <th style={{ paddingLeft: '80px' }}>Amount</th>
      <th style={{ paddingLeft: '80px' }}>Status</th>
      <th style={{ paddingLeft: '80px' }}>Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ paddingLeft: '30px' }}>131654</td>
      <td style={{ paddingLeft: '80px' }}>Sani Ratna Tamrakar</td>
      <td style={{ paddingLeft: '80px' }}>Feb 18, 2023</td>
      <td style={{ paddingLeft: '80px' }}>200</td>
      <td style={{ paddingLeft: '80px' }}>Pending</td>
      <td style={{ paddingLeft: '80px' }}>Download PDF</td>
      <td>
      </td>
    </tr>
    <tr>
    <td style={{ paddingLeft: '30px' }}>5235252</td>
      <td style={{ paddingLeft: '80px' }}>Jsan</td>
      <td style={{ paddingLeft: '80px' }}>Apr 12,2023</td>
      <td style={{ paddingLeft: '80px' }}>500</td>
      <td style={{ paddingLeft: '80px' }}>Pending</td>
      <td style={{ paddingLeft: '80px' }}>Download PDF</td>
      <td>
      </td>
    </tr>
    <tr>
      
      <td style={{ paddingLeft: '30px' }}>41341</td>
      <td style={{ paddingLeft: '80px' }}>asdba</td>
      <td style={{ paddingLeft: '80px' }}>feb 23, 2023</td>
      <td style={{ paddingLeft: '80px' }}>400</td>
      <td style={{ paddingLeft: '80px' }}>Pending</td>
      <td style={{ paddingLeft: '80px' }}>Download PDF</td>
      
    </tr>

  </tbody>
</table>

      </div>
      
      </div>
    </div>
  )
}
