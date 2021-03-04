import React from 'react';
import Delivery from '../components/checkout/delivery';

const checkout = (props)=> {
    return(
        <form>

            <div className="checkout-container">
                <div className="checkout-wrapper">
                    <div className="checkout-info">
                        <Delivery/>
                    </div>
                    <div className="try">

                    </div>
                </div>
            </div>

        </form>
    )
};

export default checkout;