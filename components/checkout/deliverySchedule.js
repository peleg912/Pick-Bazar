import React from 'react';
import times from '../../utills/times';
import DeliveryCard from './deliveryCard';
import translation from '../../utills/translation';
import {connect} from 'react-redux';

const deliverySchedule = (props)=> {


    return(
    <div className="checkout-info-container">
        <h3> {translation[props.lang].checkout.two}</h3>
        
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

const mapStateToProps = (state)=> {
    return{
        lang: state.currentLang
     }
};

export default connect(mapStateToProps)(deliverySchedule);