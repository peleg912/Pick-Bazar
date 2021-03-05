import React from 'react';
import {connect} from 'react-redux';

const creditCard = (props)=> {
    return(
        <div style={{flex: '1 1 auto', position: 'relative', width: '200px'}} className="d-block w-100">

        <label htmlFor="payment-card-179012" className="payment-cardstyle ">

        <input type="radio" id="payment-card-179012" name="Jhon Doe Smith" value="payment-card-179012" />

       <span className="payment-cardstyle-wrapper">

              <span className="card-logo">
              <img src={props.img}/>
              </span>

             <span className="CardNumTitle">Card Number</span>

            <span className="CardNumber">

               <span>****</span>
               <span>****</span>
               <span>****</span>
               <span className="card-number">{props.num}</span>

            </span>
           
             <span className="cardstyle__Name">Jhon Doe Smith</span>
       </span>

           <span className="payment-cardstyle__DeleteButton" onClick={()=>props.onRemovingCreditCard(props.num)}>
               <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
           </span>

      </label>

      </div>
    )
}

const mapDispatchToProps = (dispatch)=> {
    return{
        onRemovingCreditCard: (cardId)=> dispatch({type: 'REMOVE_CREDIT_CARD', id: cardId})
    }
}

export default connect(null, mapDispatchToProps)(creditCard);