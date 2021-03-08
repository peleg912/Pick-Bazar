import React, { Component } from 'react';
import {connect} from 'react-redux';

class editAddressModal extends Component{

  state = {
      title: this.props.dest,
      address: this.props.address
  }

  titleHandler = (event)=> {
    this.setState({title: event.target.value});
  }

  addressHandler = (event)=> {
    this.setState({address: event.target.value})
  }

  editAddress = async (event)=> {
   await event.preventDefault();

   const address = {
    id: this.props.id,
    title: this.state.title,
    address: this.state.address
}

if (address.address === "" || address.title === ""){
    this.setState({title: this.props.dest, address: this.props.address});
    return;
}

await this.props.onEditingAddress(address);

  }


  render(){
    return(

     <div className="modal fade edit-modal" id={this.props.id} tabIndex="-1" aria-hidden="true">
        <div className="inner-modal modal-dialog"> 
        <div className="modal-content">
          <form style={{boxSizing: 'border-box'}}>
          <div className="address-cardstyle modal-header">
            Edit Address
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="address-cardstyle-Field-Wrapper">
              <div className="text-field">
                  <input
                  className="form-control"
                  id="name"
                  type="text" 
                  placeholder="Enter Title" 
                  value={this.state.title}
                  onChange={(event)=>this.titleHandler(event)}/>
              </div>
          </div>
      
          <div className="address-cardstyle-Field-Wrapper">
              <div className="text-field">
                <textarea
                 className="form-control"
                 id="info"
                 placeholder="Enter Address"
                 value={this.state.address}
                 onChange={(event)=>this.addressHandler(event)} >
                </textarea>
              </div>
          </div>
      
          <button
           type="submit" 
           className="btn-edit-modal" 
           style={{width: '100%', height: '44px'}} 
           data-bs-dismiss="modal"
           onClick={(event)=>this.editAddress(event)}>
              Change Address
          </button>
      
          </form>
       </div>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
    onEditingAddress : (card)=> dispatch({type:'EDIT_ADDRESS_CARD', cardData: card})
  } 
}

export default connect(null, mapDispatchToProps)(editAddressModal);