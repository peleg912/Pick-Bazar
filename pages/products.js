import React, { Component } from 'react';
import SingleProductWrapper from '../components/single-product-display/singleProductWrapper';
import _allProducts from '../utills/products/_allProducts';

class products extends Component {

    static getInitialProps = async({query})=> {
            const productName = query.product;
            const currentProduct = _allProducts.find(v=> v.title === productName);
            return {currentProduct};
    }


    render(){
        const {currentProduct} = this.props;
        return(
            <SingleProductWrapper product={currentProduct}/>
            
        )

    }
}

export default products;