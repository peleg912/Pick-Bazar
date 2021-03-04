import React from 'react';
import {connect} from 'react-redux';


const addContactModal = (props)=> {

    const addContact = ()=> {
        address = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            title: "Secondary",
            address: "0548010431"
        }

        props.onAddingContactCard(address);
    }

    return(

    <div className="modal fade edit-modal" id="addContactModal" tabIndex="-1" aria-hidden="true">

     <div className="inner-modal modal-dialog">

            <form style={{boxSizing: 'border-box'}} role="form" method="POST" action="" className="modal-body">
                
               <div  className="address-cardstyle modal-header modal-header">
               Add New Contact
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

            <div className="address-cardstyle-Field-Wrapper">
              <div className="text-field">
                <input className="form-control" id="name" type="text" placeholder="Enter a phone number"  value=""/>
               </div>
            </div>

            
                <button
                onClick={addContact}
                type="submit" 
                className="btn-edit-modal"
                style={{width: '100%', height: '44px'}}>
                    Save Contact
                </button>

            </form>
        </div>

     </div>
    )
};

const mapDisaptchToProps = (dispatch)=> {
    return{
        onAddingContactCard: (card)=> dispatch({type:'ADD_CONTACT_CARD', cardData: card})
    }
}

export default connect(null, mapDisaptchToProps)(addContactModal);