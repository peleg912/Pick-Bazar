import React from 'react';
import ProductCard from './productCard';
import allProducts from '../../../utills/products/allProducts';
import { Component } from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';

class CategoryProducts extends Component{

    categoryHandler = ()=> {
      const categoryObj = allProducts.find(obj=> obj.category === this.props.reqCategory);
      return categoryObj.data.map(product=> (
          <ProductCard 
          key={product.title}
          img={product.img} 
          title={product.title} 
          price={product.price}/>
      ))
    };


    render(){
      return(
        <div className="grPQmX">
              {/* {this.categoryHandler()} */}
            </div>
        )
    };
}



const mapStateToProps = (state)=> {
  return{
    reqCategory : state.currentCategory
  }
}

export default connect(mapStateToProps)(CategoryProducts);