import React from 'react';
import times from '../../utills/times';
import DeliveryCard from './deliveryCard';

const deliverySchedule = (props)=> {


    return(
    <div className="checkout-info-container">
        <h3> Delivery Schedule</h3>
        
     <div className="info-btn-group">
        <div className="radio-group">

        {times.map(obj=> (
            <DeliveryCard
             key={obj.title}
             title={obj.title}
             content={obj.content}
            />
        ))}
  

     </div>
  </div>
</div>
    )
}

export default deliverySchedule;