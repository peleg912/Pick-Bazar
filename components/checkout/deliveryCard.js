import React from 'react';

const deliveryCard = (props)=> {

  

    return(
        <label id="label" htmlFor="address-23423" className="radio-card" >

        <input  type="radio" id="address-23423" name="address"/>
         <span className="radio-card-title">{props.title}</span>
         <span className="radio-card-content">{props.content}</span>

        </label>
    )
}



export default deliveryCard;