import React from 'react' 
import DataTable from './DataTableUser'
import "./style.css"

export default function RightAdminDashboard(props) {
    const totalrevenue =[
        {
            id:1,
            title:"Total Revenue (in Rs)",
            total:"12,079",
            percentage :"17",
            prev:"10,590"
        },
        {
            id:1,
            title:"No. of Invoices",
            total:"844",
            percentage :"5",
            prev:"750"
        },
        {
            id:1,
            title:"Total Customers",
            total:"1,390",
            percentage :"60",
            prev:"995"
        }
    ]
  return (
    <div className='rightDashboard'>
      <div className='admindashboardtitle'>
        <h2>{props.title}</h2>
        <div className='notification_send'>
            <img src="img/notification.png" alt="" />
            <img src="img/send.png" alt="" />
        </div>
      </div>
      <div className='statistics'>
        <div className='statistics_left'>
        <h3>Statistics</h3>
        <p>Here’s your report for this month.</p>
        </div>
        <div className='filtermonth'>
            <img src="img/calendar.png" alt="" />
            <p>This Month</p>
            <img src="img/arrowdown.png" alt="" />
        </div>
      </div>
      <div className='totalDatas'>
        {
            totalrevenue.map((items)=>(
          <div className='totalRevenue' key={items.id}>
            <div className='totalRevenuePrice'> <p>{items.title}</p><img src="img/arrowside.png" alt="" /></div>
           
            <div className='totalRevenuePrice'>
            <h1>{items.total}</h1>
            <h3>{items.percentage}% <img src="img/up.png" alt="" /></h3>
            </div>
            <h4>Prev. month: <b>{items.prev}</b></h4>
            
        </div>
            ))
        }
        
      </div>
      <DataTable table={"normaluser"}/>
    </div>
  )
}
