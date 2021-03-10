import React from 'react';
import {connect} from 'react-redux';

const deliveryCard = (props)=> {

    return(
        <label id="label" htmlFor="address-23423" className="radio-card" onClick={()=>props.onUpdateTime(props.content)}>

        <input  type="radio" id="address-23423" name="address"/>
         <span className="radio-card-title">{props.title}</span>
         <span className="radio-card-content">{props.content}</span>

        </label>
    )
}

const mapDispatchToProps = (dispatch)=> {
    return{
        onUpdateTime: (time)=> dispatch({type: 'UPDATE_TIME', data: time})
    }
}


export default connect(null, mapDispatchToProps)(deliveryCard);