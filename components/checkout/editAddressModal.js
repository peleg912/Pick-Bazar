import React from 'react';

const editAddressModal = (props)=> {
    return(

     <div className="modal fade edit-modal" id={props.id} tabIndex="-1" aria-labelledby="editAdressModal" aria-hidden="true">
        <div className="inner-modal modal-dialog"> 
          <form style={{boxSizing: 'border-box'}}>
          <div className="address-cardstyle modal-header">Edit Address
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="address-cardstyle-Field-Wrapper">
              <div className="text-field">
                  <input id="name" type="text" placeholder="Enter Title" value={props.dest}/>
              </div>
          </div>
      
          <div className="address-cardstyle-Field-Wrapper">
              <div className="text-field">
                <textarea id="info" placeholder="Enter Address" >
                  {props.address}
                </textarea>
              </div>
          </div>
      
          <button type="submit" className="btn-edit-modal" style={{width: '100%', height: '44px'}} data-bs-dismiss="modal">
              Save Address
          </button>
      
          </form>
      
      </div>
      </div>
    )
}

export default editAddressModal;