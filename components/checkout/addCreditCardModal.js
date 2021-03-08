import React, { Component } from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';


class addCreditCardModal extends Component{
 
  state= {
    num: ""
  }

  numHandler = (event)=> {
    this.setState({num: event.target.value});
  }

  // payNow = async (event)=> {
  //   await event.preventDefault();

  //   if( this.state.num === ""){
  //     return;
  //   }

  //   await this.props.onAddingCreditCard(this.state.num);
  // }

  render(){
    return(
      <div className="modal fade edit-modal" id="addCreditModal" tabIndex="-1" aria-hidden="true">
  
       <div className="inner-modal modal-dialog">
  
              <form style={{boxSizing: 'border-box'}} role="form" method="POST" action="" className="modal-body modal-content">
                  
                 <div  className="address-cardstyle modal-header modal-header">
                 Enter card info
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
  
              <div className="address-cardstyle-Field-Wrapper">
                <div className="text-field">
                  <input
                   className="form-control"
                   id="name"
                   type="number"
                   placeholder="Enter card number" 
                   value={this.state.num}
                   onChange={(event)=>this.numHandler(event)}/>
                 </div>
              </div>
  
              <div className="address-cardstyle-Field-Wrapper">
                <div className="text-field">
                  <input
                   className="form-control"
                   id="name" type="date"
                   placeholder="Enter card validity"
                    value=""/>
                 </div>
              </div>
  
              <div className="address-cardstyle-Field-Wrapper">
                <div className="text-field">
                  <input
                   className="form-control"
                   id="name" type="number" 
                   placeholder="Enter csv"  
                   value=""/>
                 </div>
              </div>
  
                <Link href="/order-received">
                  <a style={{textDecoration:"none"}}>
                    <button
                    type="submit" 
                    className="btn-edit-modal"
                    style={{width: '100%', height: '44px'}}
                    >
                        Pay Now
                    </button>
                  </a>
                </Link>
                  
  
              </form>
          </div>
  
       </div>
      )
  }
}

   

const mapDisaptchToProps = (dispatch)=> {
    return{
        onAddingCreditCard: (num)=> dispatch({type:'ADD_CREDIT_CARD', cardNum: num})
    }
}

export default connect(null, mapDisaptchToProps)(addCreditCardModal);