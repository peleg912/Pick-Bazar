import React from 'react';
import {connect} from 'react-redux';


const addCreditCardModal = (props)=> {

    const payNow = ()=> {
    }

    return(
    <div className="modal fade edit-modal" id="addCreditModal" tabIndex="-1" aria-hidden="true">

     <div className="inner-modal modal-dialog">

            <form style={{boxSizing: 'border-box'}} role="form" method="POST" action="" className="modal-body">
                
               <div  className="address-cardstyle modal-header modal-header">
               Enter card info
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

            <div className="address-cardstyle-Field-Wrapper">
              <div className="text-field">
                <input className="form-control" id="name" type="number" placeholder="Enter card number"  value=""/>
               </div>
            </div>

            <div className="address-cardstyle-Field-Wrapper">
              <div className="text-field">
                <input className="form-control" id="name" type="date" placeholder="Enter card validity"  value=""/>
               </div>
            </div>

            <div className="address-cardstyle-Field-Wrapper">
              <div className="text-field">
                <input className="form-control" id="name" type="number" placeholder="Enter csv"  value=""/>
               </div>
            </div>

              
                <button
                onClick={payNow}
                type="submit" 
                className="btn-edit-modal"
                style={{width: '100%', height: '44px'}}>
                    Pay Now
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

export default connect(null, mapDisaptchToProps)(addCreditCardModal);