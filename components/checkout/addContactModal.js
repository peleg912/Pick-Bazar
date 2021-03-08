import React, { Component } from 'react';
import {connect} from 'react-redux';


class addContactModal extends Component{

    state = {
        num: ""
    }

    numHandler = (event)=> {
        this.setState({num: event.target.value});
    }

     addContact = async (event)=> {
       await  event.preventDefault();

       const contact = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            title: "Secondary",
            num: this.state.num
        }

        if(contact.num === ""){
            return;
        }

     await this.props.onAddingContactCard(contact);
     await this.setState({num: ""});
    }

    render(){
        return(
            <div className="modal fade edit-modal" id="addContactModal" tabIndex="-1" aria-hidden="true">

            <div className="inner-modal modal-dialog">

                <div className="modal-content">
       
                   <form style={{boxSizing: 'border-box'}} role="form" method="POST" action="" className="modal-body">
                       
                      <div  className="address-cardstyle modal-header modal-header">
                      Add New Contact
                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                       </div>
       
                   <div className="address-cardstyle-Field-Wrapper">
                     <div className="text-field">
                       <input 
                       className="form-control"
                       type="text" 
                       placeholder="Enter a phone number"  
                       value={this.state.num}
                       onChange={(event)=>this.numHandler(event)}/>
                      </div>
                   </div>
       
                   
                       <button
                       onClick={(event)=>this.addContact(event)}
                       type="submit" 
                       className="btn-edit-modal"
                       style={{width: '100%', height: '44px'}}
                       data-bs-dismiss="modal">
                           Save Contact
                       </button>
       
                   </form>

                   </div>
               </div>
       
            </div>
      )
    }
}

   

    

const mapDisaptchToProps = (dispatch)=> {
    return{
        onAddingContactCard: (card)=> dispatch({type:'ADD_CONTACT_CARD', cardData: card})
    }
}

export default connect(null, mapDisaptchToProps)(addContactModal);