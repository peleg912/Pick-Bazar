import React from 'react';

const editContactModal = (props)=> {

    return(

     <div className="modal fade edit-modal" id={props.id} tabIndex="-1" aria-hidden="true">

        <div className="inner-modal modal-dialog"> 
          <form style={{boxSizing: 'border-box'}}>

          <div className="address-cardstyle modal-header">
            Edit Contact
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="address-cardstyle-Field-Wrapper">
              <div className="text-field">
                  <input id="name" type="text" placeholder="Enter a phone number" value={props.num}/>
              </div>
          </div>
      
      
          <button type="submit" className="btn-edit-modal" style={{width: '100%', height: '44px'}} data-bs-dismiss="modal">
              Save Contact
          </button>
      
          </form>
      
      </div>
      </div>
    )
}

export default editContactModal;