import React, { Component } from 'react';
import {connect} from 'react-redux';

class editContactModal extends Component{

    state= {
        num: this.props.num,
    }



    numHandler = (event)=> {
        this.setState({num : event.target.value});
    }

    editContact = async (event)=> {
        await event.preventDefault();

        const contact = {
            id: this.props.id,
            title: this.props.title,
            num: this.state.num
        }
        
        if(contact.num === ""){
            this.setState({num: this.props.num});
            return;
        }

        await this.props.onEditingContact(contact);
         this.setState({num: this.props.num});
    }

    render(){
        return(
            <div className="modal fade edit-modal" id={this.props.id} tabIndex="-1" aria-hidden="true">

            <div className="inner-modal modal-dialog"> 
              <form style={{boxSizing: 'border-box'}} className="modal-content">
    
              <div className="address-cardstyle modal-header">
                Edit Contact
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
    
              <div className="address-cardstyle-Field-Wrapper">
                  <div className="text-field">
                      <input
                      className="form-control"
                       id="name" 
                       type="text" 
                       placeholder="Enter a phone number" 
                       value={this.state.num}
                       onChange={(event)=>this.numHandler(event)}/>
                  </div>
              </div>
          
          
              <button
               type="submit" 
               className="btn-edit-modal"
               style={{width: '100%', height: '44px'}}
               data-bs-dismiss="modal"
               onClick={this.editContact}>
                  Save Contact
              </button>
          
              </form>
          
          </div>
          </div>

        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return{
        onEditingContact: (card)=> dispatch({type:'EDIT_CONTACT_CARD', cardData: card}) 
    }
}

export default connect(null, mapDispatchToProps)(editContactModal);