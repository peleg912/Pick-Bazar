import React from 'react';
import CreditCard from './creditCard';

const paymentOption = (props)=> {
    return(
        <div className="checkout-info-container">

          <h3 >Payment Option</h3>

          <header className="payment-header">
              <span className="payment-saved-cards">
                  Saved Cards
                </span>

              <button type="button" className="btn-add-card">
                  <span className="payment-groupstyle__IconWrapper-sc-7ryf95-2 eqfksf">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="12px" viewBox="0 0 12 12"><g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)"><rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor"></rect><rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor"></rect></g></svg>
                 </span>
                 Add Card
                 </button>
            </header>

            <div className="card-list-container" >
                <div >
                        <div className="card-carousel">
                            <ul className="cards-list" style={{transition: 'transform 400ms ease-in-out 0s', overflow: 'unset'}}>
                               <CreditCard/>
                               <CreditCard/>
                               <CreditCard/>
                               <CreditCard/>
                            </ul>
                        </div>
                </div>

            </div>

        
        </div>
    )
}

export default paymentOption;