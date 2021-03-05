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
           <div className="order-receivedstyle__ListItem-co65po-9 iFsVag">
             <div class="order-receivedstyle__ListTitle-co65po-10 fwRlvh">
              <p class="order-receivedstyle__Text-co65po-6 kLpUPh">Total Item</p>
             </div>

            <div class="order-receivedstyle__ListDes-co65po-11 hImmOO">
                <p class="order-receivedstyle__Text-co65po-6 bdirGO">6 Items</p>
            </div>

        </div>
        
        <div class="order-receivedstyle__ListItem-co65po-9 iFsVag">

          <div class="order-receivedstyle__ListTitle-co65po-10 fwRlvh">
            <p class="order-receivedstyle__Text-co65po-6 kLpUPh">Order Time</p>
          </div>

          <div class="order-receivedstyle__ListDes-co65po-11 hImmOO">
            <p class="order-receivedstyle__Text-co65po-6 bdirGO">1.00pm 10/12/19</p>
         </div>
         
        </div>
         
         <div class="order-receivedstyle__ListItem-co65po-9 iFsVag">
             <div class="order-receivedstyle__ListTitle-co65po-10 fwRlvh">
                <p class="order-receivedstyle__Text-co65po-6 kLpUPh">Delivery Time</p>
            </div>

            <div class="order-receivedstyle__ListDes-co65po-11 hImmOO">
                <p class="order-receivedstyle__Text-co65po-6 bdirGO">90 Minute Express Delivery</p>
            </div>
        </div>
        
        <div class="order-receivedstyle__ListItem-co65po-9 iFsVag">
            <div class="order-receivedstyle__ListTitle-co65po-10 fwRlvh">
                <p class="order-receivedstyle__Text-co65po-6 kLpUPh">Delivery Location</p>
            </div>
            
            <div class="order-receivedstyle__ListDes-co65po-11 hImmOO">
                <p class="order-receivedstyle__Text-co65po-6 bdirGO">1st Floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North</p>
            </div>
        </div>

    </div>

    <div class="order-receivedstyle__TotalAmount-co65po-4 AKfvo">
        <h2 class="order-receivedstyle__BlockTitle-co65po-5 dgVukO">Total Amount</h2>
            <div class="order-receivedstyle__ListItem-co65po-9 iFsVag">
                <div class="order-receivedstyle__ListTitle-co65po-10 fwRlvh">
                    <p class="order-receivedstyle__Text-co65po-6 kLpUPh">Sub Total</p>
                </div>
                
                <div class="order-receivedstyle__ListDes-co65po-11 hImmOO">
                    <p class="order-receivedstyle__Text-co65po-6 bdirGO">$10,864.00</p>
                </div>
            </div>
        <div class="order-receivedstyle__ListItem-co65po-9 iFsVag">
            
        <div class="order-receivedstyle__ListTitle-co65po-10 fwRlvh">
            <p class="order-receivedstyle__Text-co65po-6 kLpUPh">Payment Method</p>
        </div>
        
        <div class="order-receivedstyle__ListDes-co65po-11 hImmOO">
            <p class="order-receivedstyle__Text-co65po-6 bdirGO">Cash On Delivery</p>
        </div>
        
    </div>
    
    <div class="order-receivedstyle__ListItem-co65po-9 iFsVag">
        <div class="order-receivedstyle__ListTitle-co65po-10 fwRlvh">
            <p class="order-receivedstyle__Text-co65po-6 kLpUPh">Cash on delivery</p>
        </div>
        
        <div class="order-receivedstyle__ListDes-co65po-11 hImmOO">
          <p class="order-receivedstyle__Text-co65po-6 bdirGO">10</p>
        </div>
    </div>
    
    <div class="order-receivedstyle__ListItem-co65po-9 iFsVag">
        <div class="order-receivedstyle__ListTitle-co65po-10 fwRlvh">
            <p class="order-receivedstyle__Text-co65po-6 kLpUPh">Total</p>
        </div>

        <div class="order-receivedstyle__ListDes-co65po-11 hImmOO">
            <p class="order-receivedstyle__Text-co65po-6 bdirGO">$10,874.00</p>
        </div>
    </div>

  </div>

 </div>
</div>

    )
}

export default orderReceived;