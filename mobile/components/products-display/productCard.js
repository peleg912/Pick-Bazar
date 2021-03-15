import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';

class ProductCard extends Component{

  state= {
    touched: false,
    currentProduct : {
      img: this.props.img,
      title: this.props.title,
      price: this.props.price
    },
    productId: "",
    counter: 0
  }

 
  traceProduct = (title)=> {
    const product = this.props.products.find(p=> p.title === title);
    return product;
}

plusHandler =  async (event)=> {
  event.preventDefault();
 await this.setState((prevState)=>{ return {
      touched: true, 
      counter: prevState.counter + 1, 
      productId : '_' + Math.random().toString(36).substr(2, 9)}
  })

 await this.props.onAddingProduct({...this.state.currentProduct, id: this.state.productId});
}


minusHandler =  async (event)=> {
  event.preventDefault();

  if (this.state.counter > 1 ){
      await this.setState((prevState)=> {
          return {counter: (prevState.counter-1) }
      });
  } else {
      await this.setState((prevState)=>{
          return{touched: false, counter: 0}
      });
  }
  
  await this.props.onRemovingProduct(this.traceProduct(this.state.currentProduct.title));
}


  render(){
    return(
      <Link as={`/products/${this.props.title}`}
      href={{
      pathname: '/products',
      query: {
      product: this.props.title}}} >
      <a>
      <div className="dncxKl">
 
           <div className="jOFDKQ">
             <img src={this.props.img} className="hDtVJU"/>
           </div>
 
         <div className="bJhDda">
 
             <div className="hzdvQm">
               <span className="ecebTG">${this.props.price}</span>
             </div>
 
             <h2 className="zYpot">{this.props.title}</h2>
 
            {! this.state.touched ? 
             <button aria-label="add item to cart" className="byhaCB" >
               <div className="oExpm">Add</div>
               <span className="bQxKjU" onClick= {(event)=>this.plusHandler(event)}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path data-name="Path 9" d="M143.407,137.783h-1.25v4.375h-4.375v1.25h4.375v4.375h1.25v-4.375h4.375v-1.25h-4.375Z" transform="translate(-137.782 -137.783)" fill="currentColor"></path></svg>
               </span>
             </button>

             :
             <div className="iMeRMz">
                <button className="hQDaWZ" onClick={(event)=>this.minusHandler(event)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 2"><rect data-name="Rectangle 522" width="12" height="2" rx="1" fill="currentColor"></rect></svg>
                </button>

                <span style={{pointerEvents: 'none'}}>
                  {this.state.counter}
                </span>

                <button className="hQDaWZ " onClick={(event)=>this.plusHandler(event)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12"><g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)"><rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor"></rect><rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor"></rect></g></svg>
                </button>
            </div>
             }
 
          </div>
 
       </div>
       </a>
      </Link>
 
     )
  }
} 

const mapStateToProps= (state)=> {
  return{
      products : state.products,
      productsDistribution: state.productsDistribution,
  }
}

const mapDispatcToProps= (dispatch)=> {
 return{
   onAddingProduct: (productData) => dispatch({type: 'ADD_PRODUCT', product :productData}),
   onRemovingProduct : (productData) => dispatch({type: 'REMOVE_PRODUCT', product :productData}),
 }
}

export default connect(mapStateToProps, mapDispatcToProps)(ProductCard);