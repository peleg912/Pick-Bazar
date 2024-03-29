import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import translation from '../../utills/translation';

class cartButton extends Component{


  componentDidUpdate(){
    if(this.props.path === '/help' || '/checkout' || "/order-received"){
        document.getElementById("myBtn").style.visibility = "hidden";
      } ;
  
      if(this.props.path === "/" || this.props.path.startsWith("/products") || this.props.path.startsWith("/?search=")){
        document.getElementById("myBtn").style.visibility = "visible";
      }
     }

  render(){
    return(
      <button  className="cart-btn web" onClick={this.props.clicked} id="myBtn">
      <span className="cart-btn-header">
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12.686" height="16" viewBox="0 0 12.686 16"><g data-name="Group 2704" transform="translate(-27.023 -2)">
              <g data-name="Group 17" transform="translate(27.023 5.156)">
              <g data-name="Group 16">
              <path data-name="Path 3" d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z" transform="translate(-53.023 -101.005)" fill="currentColor">
             </path>
             </g>
             </g>
             <g data-name="Group 19" transform="translate(30.274 2)">
             <g data-name="Group 18">
              <path data-name="Path 4" d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z" transform="translate(-157.039)" fill="currentColor"></path>
             </g>
             </g>
            </g>
            </svg> 
             &nbsp;
           </span>
             {this.props.products.length} {translation[this.props.lang].cart.items}
          </span>
          <span className="cart-btn-price"> $ {this.props.totalPrice}</span>
      </button>
    )
  }
}

const mapStateToProps = (state)=> {
    return{
      products: state.products,
      totalPrice: state.totalPrice,
      lang: state.currentLang
    }
  }

export default connect(mapStateToProps)(cartButton);