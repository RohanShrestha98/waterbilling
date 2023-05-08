import React, { useEffect, useState } from 'react' 
import { toast } from 'react-toastify'
import DataTable from './DataTableUser'
import "./style.css"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './Firebase';

export default function RightAdminDashboard(props) {

  const [collectionLength, setCollectionLength] = useState(0);
  const [prevlength, setprevlength] = useState(0);

  useEffect(() => {
    const collRef = collection(db, 'user');
    const q = query(collRef, where('provience', '==', '3'));
    const q2 = query(
      collection(db, "user"),
      where(
        "lastUpdated",
        ">",
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 1 month in milliseconds
      )
    );
    const prevmonthlength = async () => {
    const snapshot = await getDocs(q2);
  const collectionLength = snapshot.size;
  setprevlength(collectionLength)
    }
    const getCountFromServer = async () => {
      const snapshot = await getDocs(q);
      const count = snapshot.size;
      setCollectionLength(count);
    };
    prevmonthlength();
    getCountFromServer();
  }, []);
    const totalrevenue =[
        {
            id:1,
            title:"Total Revenue (in Rs)",
            total:"2,079",
            percentage :"17",
            prev:"1,590"
        },
        {
            id:1,
            title:"No. of Invoices",
            total:collectionLength-1,
            percentage :"50",
            prev:prevlength
        },
        {
            id:1,
            title:"Total Customers",
            total:collectionLength,
            percentage :"60",
            prev:prevlength
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
      <DataTable table="3"/> 
      
     
    </div>
  )
}
