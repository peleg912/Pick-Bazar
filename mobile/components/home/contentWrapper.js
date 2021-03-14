import React from 'react';
import CategoryMenu from './categoryMenu';
import Banner from '../../../components/home/banner';
import AllProducts from '../products-display/allProducts';
import CheckoutBtn from '../cart/checkoutBtn';

const contentWrapper = (props)=> {
    return(
        <div className="eVHuwP">
          <CategoryMenu/>
          <Banner style={{marginBottom: '25px'}}/>
          <AllProducts/>
          <CheckoutBtn/>

        </div>
    )
}

export default contentWrapper;