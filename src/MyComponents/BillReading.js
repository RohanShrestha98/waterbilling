import react from 'react';

function BillReading(props){
    return(
        <div className='bill-reading'>
        <h2>Bill Reading </h2>
        <p><strong>Customer Name</strong> {props.customerName}</p>
        <p><strong>Address</strong> {props.Address}</p> 
        <p><strong>Bill No</strong> {props.billno}</p>  
        <p><strong>Customer id</strong> {props.customerid}</p>
        <p><strong>Bill period</strong> {props.Billperiod}</p>
        <p><strong>Billing Date</strong> {props.Billingdate}</p>
        <p><strong>Total Water Charges</strong> {props.totalwatercharges}</p>
        <p><strong>Current Month Total</strong> {props.currentwatercharges}</p>
        <p><strong>Arrears</strong> {props.arrears}</p>
        </div>
    )
}
export default BillReading;