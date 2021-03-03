import React from 'react';
import vegs from '../../utills/products/vegs';
import ProductCard from './productCard';
import Link from 'next/link';

const allProducts = (props)=> {
    return(
        <div className="ad-container" >
        <div className="container">
            <div className="row img-banner">
                {vegs.map(v=>(
                <div className="col-3" key={v.title}>
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
        </div>
    )
}

export default allProducts;