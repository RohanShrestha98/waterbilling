import React, { useState } from 'react'
import "./style.css"
import AddAdmin from './AddAdmin'
import DataTableAdmin from './DataTableAdmin'

export default function RightDashboard() {
    const [add,setAdd]=useState(false)
    const handleAdd=()=>{
        setAdd((prev)=>!prev)
    }
  return (
    <div className="rightDashboard">
        {
            add ?
          <AddAdmin handleAdd={handleAdd} setAdd={setAdd}/> : 
          <>
           <div className='dashboardHeading'>
      <h2>Billing Admin</h2>
      <button onClick={handleAdd}><img src="img/profile.png" alt="" /> Add Admin</button>
      </div>
      <div className="listContainer">
        <DataTableAdmin/>
      </div>
          </>
        }
       
       
    </div>
  )
}
