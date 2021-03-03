import React from 'react';

const cartItemsWrapper = (props)=> {
    return(
        <div className="cart-item-wrapper-container">
    <div className="cart-item-wrapper-a">
        <div className="cart-item-wrapper-b" style={{left: '0px', right: 'auto'}}></div>
     </div>

     <div className="cart-item-wrapper-c" style={{height: 'calc(100% + 1px)', float: 'left'}}>
        <div className="cart-item-wrapper-d"> </div>
     </div>

     <div className="cart-item-wrapper-e" style={{margin: '0px', width: '419px', height: '169px'}}> </div>

    <div className="cart-item-wrapper-f">
        <div className="cart-item-wrapper-g" style={{overflowY: 'scroll'}}>
            <div className="cart-item-wrapper-h" style={{padding: '0px', height: '100%', width: '100%'}}>
                <div className="cart-item-wrapper-last">
                   
                    {props.children}

                    </div>
                 </div>
             </div>
        </div>
                  
            <div className="cart-item-wrapper-i">
             <div className="cart-item-wrapper-j">
             <div className="cart-item-wrapper-k" style={{width: '100%', transform: 'translate(0px, 0px)'}}> </div>
            </div>
          </div>

         <div className="cart-item-wrapper-l">
         <div className="cart-item-wrapper-m">
          <div className="cart-item-wrapper-n" style={{height: '99.6198%', transform: 'translate(0px, 0px)'}}></div>
         
          </div>
          </div>

         <div className="cart-item-wrapper-o"> </div>
  </div>
    )
}


export default cartItemsWrapper;