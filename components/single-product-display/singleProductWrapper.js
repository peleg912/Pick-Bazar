import React from 'react';
import ImgSide from './imgSide';
import InfoSide from './infoSide';

const singleProductWrapper = (props)=> {
    return(

   <div className="single-product-container">
     <div className="single-product-wrapper">
       <div className="single-product" dir="ltr">
           <ImgSide product={props.product}/>
           <InfoSide  product={props.product}/>
         </div>
     </div>
   </div>

    )
}

export default singleProductWrapper;


