import React from 'react';
import DeliveryAddress from '../components/checkout/deliveryAddress';
import DeliverySchedule from '../components/checkout/deliverySchedule';
import ContactNumber from '../components/checkout/contactNumber';
import PaymentOption from '../components/checkout/paymentOption';
import OrderSummary from '../components/checkout/orderSummary';

const checkout = (props)=> {
    return(
        <form>

            <div className="checkout-container">
                <div className="checkout-wrapper">
                    <div className="checkout-info">
                        <DeliveryAddress/>
                        <DeliverySchedule/>
                        <ContactNumber/>
                        <PaymentOption/>
                    </div>
                    <OrderSummary/>

                    
                </div>
            </div>

        </form>
    )
};

export default checkout;