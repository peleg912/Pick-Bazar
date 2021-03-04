import React from 'react';
import {connect} from 'react-redux';


const addAddressModal = (props)=> {

    const addAddress = ()=> {
        address = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            title: "Parents",
            address: "Nahal Dalia 33, Modiin"
        }

        props.onAddingAddressCard(address);
    }

    return(
    <div className="modal fade edit-modal" id="addAddressModal" tabIndex="-1" aria-hidden="true">

     <div className="inner-modal modal-dialog">

            <form style={{boxSizing: 'border-box'}} role="form" method="POST" action="" className="modal-body">
                
               <div  className="address-cardstyle modal-header modal-header">
                Add New Address
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

            <div className="address-cardstyle-Field-Wrapper">
              <div className="text-field">
                <input className="form-control" id="name" type="text" placeholder="Enter Title"  value=""/>
               </div>
            </div>

             <div className="address-cardstyle-Field-Wrapper">
                <div className="text-field">
                    <textarea id="info" placeholder="Enter Address" className="form-control"></textarea>
                 </div>
             </div>


                <button
                onClick={addAddress}
                type="submit" 
                className="btn-edit-modal"
                style={{width: '100%', height: '44px'}}>
                    Save Address
                </button>

            </form>
        </div>

     </div>
    )
};

const mapDisaptchToProps = (dispatch)=> {
    return{
        onAddingAddressCard: (card)=> dispatch({type:'ADD_ADDRESS_CARD', cardData: card})
    }
}

export default connect(null, mapDisaptchToProps)(addAddressModal);