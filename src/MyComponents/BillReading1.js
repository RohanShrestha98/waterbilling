import react from 'react';
import BillReading from './BillReading';
import LeftDashboard from './LeftDashboard';
import "./style.css"

function BillReading1(props){
    return(
        <div className='SuperAdminDashboard'>
        <LeftDashboard/>
        <div className='rightDashboard'>
        <BillReading />
        </div>
       
        {/* <WorkInProgress/>   */}
     </div>
    )
}
export default BillReading1;

aaaaa