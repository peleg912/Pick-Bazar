import React from 'react';

const summaryProduct = (props)=> {
    return(
        <div className="checkout-scrollbar-j">

        <span className="Quantity">{props.amount}</span>
        <span className="Multiplier">x</span>
        <span className="checkout-twostyle__ItemInfo">{props.title} | .6 lb</span>
        <span className="checkout-twostyle__Price">{props.price * props.amount}</span>

      </div>
    )
}

export default summaryProduct;