import React from 'react';
import ProductCard from './productCard';
import _allProducts from '../../../utills/products/allProducts';
import vegs from '../../../utills/products/vegs';
import Link from 'next/link';

const allProducts = (props)=> {

    return(
        <div className="grPQmX">
          {/* {_allProducts.forEach(obj=>{
            obj.data.map(p=> {console.log(p); return(
             <ProductCard/>
          )})
         })
        } */}
        {vegs.map(p=> (
          <Link 
          key={p.title}
          as={`/products/${p.title}`}
          href={{
          pathname: '/products',
          query: {
          product: p.title
             }}}>
             <a>
            <ProductCard
            title={p.title}
            price={p.price}
            img={p.img}/>
             </a>
         </Link>
        ))}
       </div>

    )
}

export default allProducts;