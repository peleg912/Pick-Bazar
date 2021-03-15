import React from 'react';
import vegs from '../../utills/products/vegs';
import _allProducts from '../../utills/products/allProducts';
import ProductCard from './productCard';
import Link from 'next/link';
import { Component } from 'react';
import LoadMoreBtn from '../../mobile/components/products-display/loadMoreBtn';

class AllProducts extends Component{

    state = {
        allProducts:[],
        counter: 12
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
            <div className="ad-container web">
             <div className="container">
                <div className="bla">
                    {this.state.allProducts.slice(0,this.state.counter).map(v=>(
                    <div key={v.title}>
                        <Link 
                         as={`/products/${v.title}`}
                         href={{
                         pathname: '/products',
                         query: {
                         product: v.title
                            }}}>
                          <a>
                           <ProductCard img={v.img} title={v.title} price={v.price} id={v.id}/>
                           </a>
                        </Link>
                    </div>
                    ))}
                </div>
              </div>
              {this.state.allProducts.length > this.state.counter ?
              <LoadMoreBtn style={{fontSize:'unset'}} clicked={this.loadMorehandler}/> : null}
            </div>
              
        )
    }
} 

export default AllProducts;