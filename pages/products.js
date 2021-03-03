import React, { Component } from 'react';
import SingleProductWrapper from '../components/single-product-display/singleProductWrapper';
import vegs from '../utills/products/vegs';

class products extends Component {

    static getInitialProps = async({query})=> {
            const productName = query.product;
            const currentProduct = vegs.find(v=> v.title === productName);

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