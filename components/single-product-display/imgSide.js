import React from 'react';
import Thumbnail from './thumbnail';

const imgSide = (props)=> {
    return(

<div className="img-side-container">
  <div className="img-side-wrapper">
 
      <img src={props.product.img}
       className="product-image"/>

      <ul className="thumbnail-list">
        <Thumbnail img={props.product.img}/>
        <Thumbnail img={props.product.img}/>
        <Thumbnail img={props.product.img}/>
        <Thumbnail img={props.product.img}/>
      </ul>
     
    </div>

    </div>

    )
}

export default imgSide;








 