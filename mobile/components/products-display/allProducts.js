import React from 'react';
import ProductCard from './productCard';
import _allProducts from '../../../utills/products/allProducts';
import vegs from '../../../utills/products/vegs';

const allProducts = (props)=> {

    const getProducts = ()=> {
        _allProducts.map(obj=> {
         obj.data.map(p=> {return(
             <ProductCard/>
          )})
         })
        }
        
 

    return(
        <div className="grPQmX">
          {/* {_allProducts.forEach(obj=>{
            obj.data.map(p=> {console.log(p); return(
             <ProductCard/>
          )})
         })
        } */}
        {vegs.map(p=> (
            <ProductCard
            key={p.title}
            title={p.title}
            price={p.price}
            img={p.img}/>
        ))}
       </div>

    )
}

export default allProducts;