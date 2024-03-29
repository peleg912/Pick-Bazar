import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import translation from '../../utills/translation';

class Cart extends Component{
    render(){
        return(
            <div className="cart-container">
                <div className="cart-div">
                    <div className="cart-header">
                        <div className="cart-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="24px" viewBox="0 0 23.786 30"><g data-name="shopping-bag (3)" transform="translate(-53.023)"><g data-name="Group 2704"><g data-name="Group 17" transform="translate(53.023 5.918)"><g data-name="Group 16"><path data-name="Path 3" d="M76.8,119.826l-1.34-16.881A2.109,2.109,0,0,0,73.362,101H70.716v3.921a.879.879,0,1,1-1.757,0V101H60.875v3.921a.879.879,0,1,1-1.757,0V101H56.472a2.109,2.109,0,0,0-2.094,1.937l-1.34,16.886a4.885,4.885,0,0,0,4.87,5.259H71.926a4.884,4.884,0,0,0,4.87-5.261Zm-7.92-8.6-4.544,4.544a.878.878,0,0,1-1.243,0l-2.13-2.13A.878.878,0,0,1,62.2,112.4l1.509,1.508,3.923-3.923a.879.879,0,1,1,1.242,1.243Z" transform="translate(-53.023 -101.005)" fill="currentColor"></path></g></g><g data-name="Group 19" transform="translate(59.118)"><g data-name="Group 18"><path data-name="Path 4" d="M162.838,0a5.806,5.806,0,0,0-5.8,5.8v.119H158.8V5.8a4.042,4.042,0,1,1,8.083,0v.119h1.757V5.8A5.806,5.806,0,0,0,162.838,0Z" transform="translate(-157.039)" fill="currentColor"></path></g></g></g></g></svg>
                            <span className="cart-header-span">{this.props.productsDistribution.length}&nbsp;{translation[this.props.lang].cart.items}</span>
                       </div>
                            <button className="cart-close-btn" onClick={this.props.close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
                            </button>
                    </div>

                  {this.props.children}

                  <div className="cart-checkout">
                      <span className="cart-PromoCode">
                      <button className="promo-btn">{translation[this.props.lang].cart.haveVoucher}</button>
                      </span>

                    {this.props.products.length > 0 ?
                      <button className="cart-Checkout-Btn" type="button" >
                          <Link href="/checkout" >
                            <a className="cart-btn-title">{translation[this.props.lang].cart.checkout}</a>
                          </Link>
                           <span className="cart-title-price">${this.props.totalPrice}</span>
                     </button>
                     : 
                     <button className="cart-Checkout-Btn" type="button" disabled>
                       <a className="cart-btn-title">{translation[this.props.lang].cart.checkout}</a>
                       <span className="cart-title-price">${this.props.totalPrice}</span>
                   </button>}

                </div>
            </div>
        </div>

        )
    }
}


const mapStateToProps = (state)=> {
    return{
      totalPrice : state.totalPrice,
      productsDistribution: state.productsDistribution,
      products: state.products,
      lang: state.currentLang
    }
  }

export default connect(mapStateToProps)(Cart);