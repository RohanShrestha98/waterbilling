import React, { useEffect, useState } from 'react' 
import { toast } from 'react-toastify'
import DataTable from './DataTableUser'
import "./style.css"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './Firebase';

export default function RightSuperAdminDashboard(props) {

  const [collectionLength, setCollectionLength] = useState(0);
  const [prevlength, setprevlength] = useState(0);

  useEffect(() => {
    const collRef = collection(db, 'user');
    const qa = query(collRef, where('provience', '==', '1'));
    const qb = query(collRef, where('provience', '==', '2'));
    const qc = query(collRef, where('provience', '==', '3'));
    const qd = query(collRef, where('provience', '==', '4'));
    const qe = query(collRef, where('provience', '==', '5'));
    const qf = query(collRef, where('provience', '==', '6'));
    const qg = query(collRef, where('provience', '==', '7'));
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
      const snapshot1 = await getDocs(qa);
      const snapshot2 = await getDocs(qb);
      const snapshot3 = await getDocs(qc);
      const snapshot4 = await getDocs(qd);
      const snapshot5 = await getDocs(qe);
      const snapshot6 = await getDocs(qf);
      const snapshot7 = await getDocs(qg);
      const count1 = snapshot1.size;
      const count2 = snapshot2.size;
      const count3 = snapshot3.size;
      const count4= snapshot4.size;
      const count5= snapshot5.size;
      const count6= snapshot6.size;
      const count7= snapshot7.size;
      setCollectionLength(count1+count2+count3+count4+count5+count6+count7);
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
            total:collectionLength,
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
    const [search,setSearch] = useState("7")

  return (
    <div className='rightDashboard'>
      <div className='admindashboardtitle'>
        <h2>{props.title}</h2>
        {/* <div className='notification_send'>
            <img src="img/notification.png" alt="" />
            <img src="img/send.png" alt="" />
        </div> */}
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
     
      
        search === "1" ? <DataTable table="1"/> : search=== "2" ? <DataTable table="2"/>:search=== "3"? <DataTable table="3"/> : search=== "4" ? <DataTable table="4"/> : search=== "5" ?  <DataTable table="5"/> : search=== "6" ? <DataTable table="6"/> : search=== "7" ? <DataTable table="7"/> : console.log("Wrong provience")
    }
    </div>
  )
}
