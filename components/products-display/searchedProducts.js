import React from 'react';
import ProductCard from './productCard';
import allProducts from '../../utills/products/allProducts';
import { Component } from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';

class SearchedProducts extends Component{

  searchHandler = ()=> {
      return this.props.searchRes.res.map(product=> (
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
            <div className="ad-container web" >
             <div className="container">
               <div className="bla">
              {this.searchHandler()}
            </div>
        </div>
        </div>
        )
    };
}



const mapStateToProps = (state)=> {
  return{
    reqCategory : state.currentCategory,
    searchRes: state.searchRes
  }
}

export default connect(mapStateToProps)(SearchedProducts);