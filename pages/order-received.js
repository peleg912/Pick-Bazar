import React from 'react';
import Link from 'next/link';

const orderReceived = ()=> {

    return(

    <div className="OrderReceivedWrapper">
     <div className="OrderReceivedContainer">

        <Link href="/">
        <a className="home-btn" >Back to Home</a>
        </Link>

        <div className="order-receivedstyle__OrderInfo">
         <h2 >Order Received</h2>
         <p className="thank-you">Thank you. Your order has been received</p>

         <div className="order-receivedstyle__InfoBlockWrapper">

             <div className="ckSHFg">
                 <p className="kLpUPh">Order Number</p>
                 <p className="bdirGO">1444</p>
             </div>

             <div className="ckSHFg">
                 <p className="kLpUPh">Date</p>
                 <p className="bdirGO">March 14, 2019</p>
            </div>
            
            <div className="ckSHFg">
                <p className="kLpUPh">Total</p>
                <p className="bdirGO">$10,944.00</p>
            </div>

            <div className="ckSHFg">
                <p className="kLpUPh">Payment Method</p>
                <p className="bdirGO">Cash on delivery</p>
            </div>

         </div>
    </div>
    
       <div className="order-receivedstyle__OrderInfo">
           <h2>Order Details</h2>

           <div className="order-receivedstyle__ListItem">
             <div className="order-receivedstyle__ListTitle">
                <p className="order-receivedstyle__Text">Total Item</p>
             </div>

            <div className="order-receivedstyle__ListDes">
                <p className="bdirGO">6 Items</p>
            </div>

           </div>
        
        <div className="order-receivedstyle__ListItem">
          <div className="order-receivedstyle__ListTitle">
            <p className="order-receivedstyle__Text">Order Time</p>
          </div>

          <div className="order-receivedstyle__ListDes">
            <p className="bdirGO">1.00pm 10/12/19</p>
         </div>
         
        </div>
         
         <div className="order-receivedstyle__ListItem">
             <div className="order-receivedstyle__ListTitle">
                <p className="order-receivedstyle__Text">Delivery Time</p>
            </div>

            <div className="order-receivedstyle__ListDes">
                <p className="bdirGO">90 Minute Express Delivery</p>
            </div>
        </div>
        
        <div className="order-receivedstyle__ListItem">
            <div className="order-receivedstyle__ListTitle">
                <p className="order-receivedstyle__Text">Delivery Location</p>
            </div>
            
            <div className="order-receivedstyle__ListDes">
                <p className="bdirGO">1st Floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North</p>
            </div>
        </div>

    </div>



    <div className="order-receivedstyle__TotalAmount">
        <h2 className="dgVukO">Total Amount</h2>

            <div className="order-receivedstyle__ListItem">
                <div className="order-receivedstyle__ListTitle">
                    <p className="order-receivedstyle__Text">Sub Total</p>
                </div>
                
                <div className="order-receivedstyle__ListDes">
                    <p className="bdirGO">$10,864.00</p>
                </div>
            </div>

            <div className="order-receivedstyle__ListItem">
                <div className="order-receivedstyle__ListTitle">
                    <p className="order-receivedstyle__Text">Payment Method</p>
              </div>
        
            <div className="order-receivedstyle__ListDes">
                <p className="bdirGO">Cash On Delivery</p>
            </div>
        
       </div>
    
       <div className="order-receivedstyle__ListItem">
            <div className="order-receivedstyle__ListTitle">
                 <p className="order-receivedstyle__Text">Cash on delivery</p>
            </div>
        
        <div className="order-receivedstyle__ListDes">
          <p className="bdirGO">10</p>
        </div>
    </div>
    
    <div className="order-receivedstyle__ListItem">
         <div className="order-receivedstyle__ListTitle">
            <p className="order-receivedstyle__Text">Total</p>
         </div>

        <div className="order-receivedstyle__ListDes">
            <p className="bdirGO">$10,874.00</p>
        </div>
    </div>

  </div>

 </div>
</div>

    )
}

export default orderReceived;