import React from 'react';
import ProductCard from './productCard';
import _allProducts from '../../../utills/products/allProducts';
import vegs from '../../../utills/products/vegs';
import Link from 'next/link';
import { Component } from 'react';
import LoadMoreBtn from './loadMoreBtn';

class AllProducts extends Component{

  state = {
    allProducts:[],
    counter: 10
  }

componentDidMount(){
  let allP = [];
  _allProducts.forEach(obj=> {
    obj.data.forEach(p=> {
      allP.push(p);
    })
  });
  this.setState({allProducts: allP})
}

loadMorehandler = ()=> {
  this.setState((prevState)=> {
    return {counter: (prevState.counter * 2) }
  })
}


  render(){
    return(
      <>
      <div className="grPQmX">
        {this.state.allProducts.slice(0,this.state.counter).map(p=> (
            <ProductCard
             key={p.title}
            title={p.title}
            price={p.price}
            img={p.img}/>
         ))} 
       </div>

            {this.state.allProducts.length > this.state.counter ?
            <LoadMoreBtn clicked={this.loadMorehandler}/> : null}
            </>
   )}
}

export default AllProducts;