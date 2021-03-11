import React, { Component } from 'react';
import {connect} from 'react-redux';
import translation from '../../utills/translation';

class addAddressModal extends Component{

    state = {
        title: "",
        address: ""
    }

    titleHandler = (event)=> {
        this.setState({title: event.target.value})
    }

    addressHandler = (event)=> {
        this.setState({address: event.target.value})
    }

   addAddress = async (event)=> {
    await event.preventDefault();


    const address = {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: this.state.title,
        address: this.state.address
    }

    if (address.address === ""|| address.title === ""){
        await this.setState({title:"", address:""});
        return;
    }

    await this.props.onAddingAddressCard(address);
    await this.setState({title:"", address:""});
    }


    render(){
    return(

    <div className="modal fade edit-modal" id="addAddressModal" tabIndex="-1" aria-hidden="true">

     <div className="inner-modal modal-dialog">

        <div className="modal-content">
            <form style={{boxSizing: 'border-box'}} role="form" >
                
               <div  className="address-cardstyle modal-header modal-header">
                Add New Address
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

            <div className="address-cardstyle-Field-Wrapper">
              <div className="text-field">
                <input 
                className="form-control"
                id="title" 
                type="text"
                placeholder="Enter Title"
                onChange={(event)=>this.titleHandler(event)}
                value={this.state.title} />
               </div>
            </div>

             <div className="address-cardstyle-Field-Wrapper">
                <div className="text-field">
                    <textarea
                     id="info"
                     placeholder="Enter Address"
                     className="form-control"
                     onChange={(event)=>this.addressHandler(event)}
                     value={this.state.address}>
                     </textarea>
                 </div>
             </div>


                <button
                onClick={(event)=>this.addAddress(event)}
                type="submit" 
                data-bs-dismiss="modal"
                className="btn-edit-modal"
                id="modal"
                style={{width: '100%', height: '44px'}}>
                    {translation[this.props.lang].modals.saveAddress}
                </button>

            </form>
            </div>
        </div>

     </div>
    )
  }  

};

const mapDisaptchToProps = (dispatch)=> {
    return{
        onAddingAddressCard: (card)=> dispatch({type:'ADD_ADDRESS_CARD', cardData: card})
    }
}

const mapStateToProps= (state)=>{
    return{
      lang : state.currentLang
    } 
  }

export default connect(mapStateToProps, mapDisaptchToProps)(addAddressModal);