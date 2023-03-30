import React, { useState } from 'react' 
import { toast } from 'react-toastify'
import DataTable from './DataTableUser'
import "./style.css"

export default function RightSuperAdminDashboard(props) {
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
    const [search,setSearch] = useState("7")

    const [searchprovience,setsearchprovience] = useState("provienceone")
    const handleSearch =(e)=>{
      e.preventDefault();
      if(search==="1"){
        setsearchprovience("provienceone")
      }else if(search==="2"){
        setsearchprovience("proviencetwo")
      }else if(search==="3"){
        setsearchprovience("proviencethree")
      }else if(search==="4"){
        setsearchprovience("proviencefour")
      }else if(search==="5"){
        setsearchprovience("proviencefive")
      }else if(search==="6"){
        setsearchprovience("proviencesix")
      }else if(search==="7"){
        setsearchprovience("provienceseven")
      }else{
        toast.error("Provience incorrect")
      }
    }
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
      <div className='provienceSearch'>
      <input type="number"  id="search" onChange={(e)=>setSearch(e.target.value)} placeholder='Search for provences data'/>
      </div>
      <div className='provienceNumber'>
      <p>User in Provience {search}</p>
      </div>
      {
        !search ?  <div className="datatable" style={{height:"500px"}}></div> :
     
      
        search === "1" ? <DataTable table="provienceone"/> : search=== "2" ? <DataTable table="proviencetwo"/>:search=== "3"? <DataTable table="proviencethree"/> : search=== "4" ? <DataTable table="proviencefour"/> : search=== "5" ?  <DataTable table="proviencefive"/> : search=== "6" ? <DataTable table="proviencesix"/> : search=== "7" ? <DataTable table="provienceseven"/> : console.log("Wrong provience")
      
    }
     
    </div>
  )
}
