import React from 'react';
import {connect} from 'react-redux';

const addressCard = (props)=> {
  
    return(
        <label htmlFor="address-23423" className="radio-card" onClick={()=>props.onUpdateAddress(props.address)}>

        <input  type="radio" id="address-23423" name="address" value="27 Street, 2569 Heritage Road Visalia, CA 93291"/>
         <span className="radio-card-title">{props.dest}</span>
         <span className="radio-card-content">{props.address}</span>

         <span className="edit-btn-group">

           <span className="edit-btn b" data-bs-toggle="modal" data-bs-target={props._id}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.2 7.2"><path d="M64,69.7v1.5h1.5l4.42-4.42-1.5-1.5Zm7.08-4.08a.387.387,0,0,0,0-.56l-.94-.94a.387.387,0,0,0-.56,0l-.74.74,1.5,1.5Z" transform="translate(-64 -63.999)" fill="currentColor"></path></svg>
            </span>

           <span className="delete-btn b" onClick={()=>props.onRemovingAddressCard(props.id)}>
             <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
          </span>

         </span>
        </label>
    )
}

const mapDispatchToProps=(dispatch)=> {
  return{
      onRemovingAddressCard: (cardId)=> dispatch({type:'REMOVE_ADDRESS_CARD', id: cardId}),
      onUpdateAddress: (address)=> dispatch({type: 'UPDATE_ADDRESS', data: address})
  }
};



export default connect(null, mapDispatchToProps)(addressCard);