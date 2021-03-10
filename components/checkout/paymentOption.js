import React from 'react';
import CreditCard from './creditCard';
import {connect} from 'react-redux';
import AddCreditCardModal from './addCreditCardModal';
import Voucher from './voucher';
import Link from 'next/link';

const paymentOption = (props)=> {
    return(
        <div className="checkout-info-container">

          <h3 >Payment Option</h3>

          <header className="payment-header">
              <span className="payment-saved-cards">
                  Saved Cards
                </span>

              <button type="button" className="btn btn-add-card" data-bs-toggle="modal" data-bs-target="#addCreditModal">
                  <span className="payment-groupstyle__IconWrapper-sc-7ryf95-2 eqfksf">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="12px" viewBox="0 0 12 12"><g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)"><rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor"></rect><rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor"></rect></g></svg>
                 </span>
                 Add Card
             </button>

             {/* MODAL */}
             <AddCreditCardModal/>

            </header>

            <div className="card-list-container" >
                <div >
                        <div className="card-carousel carousel slide" data-bs-ride="carousel" id="cardsCarousel">
                            <div className="cards-list carousel-inner" style={{transition: 'transform 400ms ease-in-out 0s', overflow: 'unset'}}>
                              {props.creditCards.map(c=> (
                                  <CreditCard
                                  key={c.num}
                                  img={c.img}
                                  num={c.num}
                                  />
                              ))}
                            </div>

                            <div className="carousel__ButtonGroupWrapper">

                            <button className="carousel__ButtonPrev carousel-control-prev" data-bs-target="#cardsCarousel"  data-bs-slide="prev">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" fill="currentColor" stroke="currentColor"></path></svg>
                            </button>
 
                            <button className="carousel__ButtonNext carousel-control-next" data-bs-target="#cardsCarousel"  data-bs-slide="next">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" fill="currentColor" stroke="currentColor"></path></svg>
                            </button>

                          </div>
                        </div>
                   </div>
               </div>

                <Voucher/>

                <span className="TermConditionText">
                    By making this purchase you agree to our
                    <span className="TermConditionLink">
                        terms and conditions.
                    </span>
                </span>

                <div className="CheckoutSubmit">

                        <Link href="/order-received">
                         <a style={{textDecoration: "none"}}>
                          <button type="button" style={{width:'100%'}} disabled={props.products.length < 1} >
                           Proceed to Checkout
                          </button> 
                          </a>
                        </Link>

                </div>

        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        creditCards: state.creditCards,
        products: state.products
    }
}

export default connect(mapStateToProps)(paymentOption);