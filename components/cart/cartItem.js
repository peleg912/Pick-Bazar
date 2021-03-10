import React from 'react';
import {connect} from 'react-redux';

const cartItem = (props)=> {

    const plusHandler = async()=> {
        const product = props.products.find(p=> p.title === props.title);
        await props.onAddingProduct({...product, id: '_' + Math.random().toString(36).substr(2, 9)});
    }

    const minusHandler = async()=> {
        const product = props.products.find(p=> p.title === props.title);
        await props.onRemovingProduct(product);
    }

 

    const traceProduct = (title)=> {
        const product = props.products.find(p=> p.title === title);
        return product;
    }



    return(
        <div className="cart-item-container">
         <div className="cart-item-counter">

            <button className="cart-item-counter-btn" onClick={minusHandler}>
                    <svg style={{cursor: 'pointer',color: 'rgb(119, 121, 140)', overflow: 'hidden'}} xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 2"><rect data-name="Rectangle 522" width="12" height="2" rx="1" fill="currentColor"></rect></svg>
            </button>
            <span className="cart-item-counter-amount">{props.amount}</span>

             <button className="cart-item-counter-btn" onClick={plusHandler}>
                    <svg style={{cursor: 'pointer',color: 'rgb(119, 121, 140)', overflow: 'hidden'}} xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12"><g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)"><rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor"></rect><rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor"></rect></g></svg>
             </button>
         </div>

              <img src={props.img} className="cart-items-img"/>
              <div className="cart-item-info">
              <span className="cart-item-name">{props.title}</span>
            <span className="cart-item-price">${props.price}</span>
            <span
             className="cart-item-amount">X {props.amount} </span>
                </div>
              <span className="cart-item-total">$ {props.amount * props.price}</span>

                 <button
                  className="cart-item-remove-btn"
                  onClick={()=>props.onClearingProduct(props.title,(props.amount * props.price))}>
                     <svg style={{cursor: 'pointer',color: 'rgba(0, 0, 0, 0.25)', overflow: 'hidden'}} xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
                 </button>
</div>
    )
}

const mapStateToProps = (state)=> {
    return{
        products: state.products
    }
};


const mapDispatchToProps = (dispatch)=> {
    return{
        onAddingProduct: (productData) => dispatch({type: 'ADD_PRODUCT', product :productData}),
        onRemovingProduct : (productData) => dispatch({type: 'REMOVE_PRODUCT', product :productData}),
        onClearingProduct: (productTitle, totalPriceToReduce) => dispatch({type:'CLEAR_PRODUCT', title: productTitle, priceToReduce: totalPriceToReduce})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(cartItem);
                                                 
                                                 