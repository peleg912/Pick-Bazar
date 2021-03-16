import React from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import translation from '../utills/translation';


const orderReceived = (props)=> {

    return(

    <div className="OrderReceivedWrapper">
     <div className="OrderReceivedContainer">

        <Link href="/">
        <a className="home-btn" >{translation[props.lang].order.backHome}</a>
        </Link>

        <div className="order-receivedstyle__OrderInfo">
         <h2 >{translation[props.lang].order.orderRec}</h2>
         <p className="thank-you">{translation[props.lang].order.tnx}</p>

         <div className="order-receivedstyle__InfoBlockWrapper">

             <div className="ckSHFg">
                 <p className="kLpUPh">{translation[props.lang].order.orderNum}</p>
                 <p className="bdirGO">1444</p>
             </div>

             <div className="ckSHFg">
                 <p className="kLpUPh">{translation[props.lang].order.date}</p>
                 <p className="bdirGO">March 14, 2019</p>
            </div>
            
            <div className="ckSHFg">
                <p className="kLpUPh">{translation[props.lang].order.total}</p>
                <p className="bdirGO">${props.totalPrice}</p>
            </div>

            <div className="ckSHFg">
                <p className="kLpUPh">{translation[props.lang].order. paymentMet}</p>
                <p className="bdirGO">{translation[props.lang].order.cashOn}</p>
            </div>

         </div>
    </div>
    
       <div className="order-receivedstyle__OrderInfo">
           <h2>{translation[props.lang].order.orderDet}</h2>

           <div className="order-receivedstyle__ListItem">
             <div className="order-receivedstyle__ListTitle">
                <p className="order-receivedstyle__Text">{translation[props.lang].order.totalItems}</p>
             </div> :

            <div className="order-receivedstyle__ListDes">
                <p className="bdirGO">{props.products.length} Items</p>
            </div>

           </div>
        
        <div className="order-receivedstyle__ListItem">
          <div className="order-receivedstyle__ListTitle">
            <p className="order-receivedstyle__Text">{translation[props.lang].order.orderTime}</p>
          </div> :

          <div className="order-receivedstyle__ListDes">
            <p className="bdirGO">1.00pm 10/12/19</p>
         </div>
         
        </div>
         
         <div className="order-receivedstyle__ListItem">
             <div className="order-receivedstyle__ListTitle">
                <p className="order-receivedstyle__Text">{translation[props.lang].order.deliveryTime}</p>
            </div> :

            <div className="order-receivedstyle__ListDes">
                <p className="bdirGO">{props.orderSummary.time}</p>
            </div>
        </div>
        
        <div className="order-receivedstyle__ListItem">
            <div className="order-receivedstyle__ListTitle">
                <p className="order-receivedstyle__Text">{translation[props.lang].order.deliveryLoc}</p>
            </div> :
            
            <div className="order-receivedstyle__ListDes">
                <p className="bdirGO">{props.orderSummary.address}</p>
            </div>
        </div>

    </div>



    <div className="order-receivedstyle__TotalAmount">
        <h2 className="dgVukO">{translation[props.lang].order.totalAmount}</h2>

            <div className="order-receivedstyle__ListItem">
                <div className="order-receivedstyle__ListTitle">
                    <p className="order-receivedstyle__Text">{translation[props.lang].order.sub}</p>
                </div> :
                
                <div className="order-receivedstyle__ListDes">
                    <p className="bdirGO">${props.totalPrice}</p>
                </div>
            </div>

            <div className="order-receivedstyle__ListItem">
                <div className="order-receivedstyle__ListTitle">
                    <p className="order-receivedstyle__Text">{translation[props.lang].order.paymentMet}</p>
              </div> :
        
            <div className="order-receivedstyle__ListDes">
                <p className="bdirGO">{translation[props.lang].order.cashOn}</p>
            </div>
        
       </div>
    
       <div className="order-receivedstyle__ListItem">
            <div className="order-receivedstyle__ListTitle">
                 <p className="order-receivedstyle__Text">{translation[props.lang].order.cashOn}</p>
            </div> :
        
        <div className="order-receivedstyle__ListDes">
          <p className="bdirGO">10</p>
        </div>
    </div>
    
    <div className="order-receivedstyle__ListItem">
         <div className="order-receivedstyle__ListTitle">
            <p className="order-receivedstyle__Text">{translation[props.lang].order.total}</p>
         </div> :

        <div className="order-receivedstyle__ListDes">
            <p className="bdirGO">${props.totalPrice}</p>
        </div>
    </div>

  </div>






































































































































 </div>
</div>

    )
}

const mapStateToProps = (state)=> {
    return{
        totalPrice: state.totalPrice,
        products: state.products,
        orderSummary: state.orderSum,
        lang: state.currentLang
    }
}

export default connect(mapStateToProps)(orderReceived);