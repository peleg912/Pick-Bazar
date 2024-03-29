import React from 'react';
import {connect} from 'react-redux';

const infoSide = (props)=> {

  const addToCart = ()=>{
      const product = {
        img: props.product.img,
        title:props.product.title,
        price: props.product.price
      }

      props.onAddingProduct(product);
  }


    return(
        <div dir="ltr" className="info-side-container">

         <div className="info-side-title">
             <h1 >{props.product.title}</h1>
        </div>

         <div className="info-side-price">
           <div className="info-side-price-a">
               $ {props.product.price}
          </div>
        </div>

        <p className="info-side-desc">
            {props.product.desc}
        </p>
        
        <div className="info-side-add-btn-wrapper">
           <div>

           <button className="info-side-add-btn" onClick={addToCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14.4px" height="12px" viewBox="0 0 14.4 12" fill="currentColor" ><g data-name="Group 120" transform="translate(-288 -413.89)"><path data-name="Path 154" fill="currentColor" d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"></path></g></svg>
            <span className="product-details-sixstyle__ButtonText-sc-1a1y4t7-15 iDmiAk">Add to cart</span>
            </button>

          </div>
        </div>
     </div>
    )
}

const mapDispatchToProps = (dispatch)=> {
  return{
    onAddingProduct: (pro)=> dispatch({type:'ADD_PRODUCT', product: pro })
  }
}

export default connect(null, mapDispatchToProps)(infoSide);