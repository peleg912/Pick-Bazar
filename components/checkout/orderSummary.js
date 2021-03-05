import React from 'react';
import {connect} from 'react-redux';
import SummaryProduct from './summaryProduct';

const orderSummary = (props)=> {
    return(
        <div className="order-summary-container">
            <div>
                <div style={{position: 'relative', zIndex: '999', transform: 'translate3d(0px, 0px, 0px'}}>

                    <div className="OrderInfo">
                       <h3 >Your Order</h3>

                     <div className="checkout-scrollbar">
                   
                      <div className="checkout-scrollbar-a">
                         <div className="checkout-scrollbar-b" style={{left: '0px', right: 'auto'}}> </div>
                      </div>

                      <div className="checkout-scrollbar-c" style={{height: 'calc(100% + 1px)', float: 'left'}}>
                          <div className="checkout-scrollbar-d"></div>
                      </div>

                      <div className="checkout-scrollbar-e" style={{margin: '0px -15px 0px 0p', height: '108px', width: '269px'}}></div>
                      
                      <div className="checkout-scrollbar-f">
                        <div className="checkout-scrollbar-g">
                         <div className="checkout-scrollbar-h" style={{padding: '0px 15px 0px 0px', height: 'auto', width: '100%'}}>
                      
                          <div className="checkout-scrollbar-i">

                          {props.productsDist.map(p=> (
                              <SummaryProduct
                                key={p.productTitle}
                                amount={p.amount}
                                title={p.productTitle}
                                price={p.price}
                              />
                          ))}

                        </div>
                      </div>
                     </div>
                    </div>

                    <div className="checkout-scrollbar-k">
                     <div className="checkout-scrollbar-l">
                        <div className="checkout-scrollbar-m" style={{width: '100%', transform: 'translate(0px, 0px)'}}></div>
                     </div>
                    </div>

                    <div className="checkout-scrollbar-n">
                        <div className="checkout-scrollbar-l">
                            <div className="checkout-scrollbar-o" style={{height: '100%', transform: 'translate(0px, 0px)'}}></div>
                        </div>
                    </div>

                     <div className="checkout-scrollbar-p"></div>

                    </div>
                    
                    <div className="CalculationWrapper">
                        <div className="checkout-twostyle__TextWrapper">
                            <span className="checkout__Text">Sub Total</span>
                            <span className="checkout__Text">${props.totalPrice}</span>
                        </div>

                        <div className="checkout-twostyle__TextWrapper">
                            <span className="checkout__Text">Delivery Fee</span>
                            <span className="checkout__Text">$0.00</span>
                        </div>

                        <div className="checkout-twostyle__TextWrapper">
                            <span className="checkout__Text">Discount</span>
                            <span className="checkout__Text">$0.00</span>

                         </div>

                         <div className="checkout-twostyle__TextWrapper" style={{marginTop: '20px'}}>
                             <span className="checkout-twostyle__Bold">Total 
                               <span className="checkout-twostyle__Small">(Incl. VAT)</span>
                             </span>
                             <span className="checkout-twostyle__Bold">${props.totalPrice}</span>
                        </div>
                        
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
};

const mapStateToProps = (state)=> {
    return{
        productsDist: state.productsDistribution,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps)(orderSummary);