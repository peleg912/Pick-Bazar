import React from 'react';
import ProductCard from './productCard';
import allProducts from '../../utills/products/allProducts';
import { Component } from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';

class CategoryProducts extends Component{
    categoryHandler = ()=> {
      const categoryObj = allProducts.find(obj=> obj.category === this.props.reqCategory);
      return categoryObj.data.map(product=> (
        <div key={product.title}>
             <Link 
                     as={`/products/${product.title}`}
                     href={{
                    pathname: '/products',
                     query: {
                     product: product.title
                        }}}>
                      <a>
          <ProductCard img={product.img} title={product.title} price={product.price}/>
          </a>
          </Link>
        </div>
      ))
    };

    render(){
        return(
          <div className="ad-container" >
          <div className="container">
             <div className="bla">
              {this.categoryHandler()}
            </div>
        </div>
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