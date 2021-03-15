import React from 'react';
import CategoryMenu from './categoryMenu';
import Banner from '../../../components/home/banner';
import AllProducts from '../products-display/allProducts';
import CheckoutBtn from '../cart/checkoutBtn';
import { Component } from 'react';
import Cart from '../../../components/cart/cart';
import {connect} from 'react-redux';
import CartItemsWrapper from '../../../components/cart/cartItemWrapper';;
import CartItem from '../../../components/cart/cartItem';
import EmptyCart from '../../../components/cart/emptyCart';
import CartWrapper from '../cart/cartWrapper';

class ContentWrapper extends Component {

  state={
    showCart: false
  }

  openCartHandler = ()=> {
    this.setState({showCart : ! this.state.showCart});
  }

  cartDisplayHandler = ()=> {
      if (this.props.products.length < 1){
          return (
              <EmptyCart/>
          )
      }else {
          return(
              <CartItemsWrapper>
                  {this.props.productsDistribution.map(p=> (
                      <CartItem 
                      key={p.productTitle}
                      amount={p.amount}
                      title={p.productTitle}
                      price={p.price}
                      img={p.img}/>
                  ))}
              </CartItemsWrapper>
          )
      }
  }

  render(){
    return(
      <div className="eVHuwP">
      <CategoryMenu/>
      <Banner style={{marginBottom: '25px'}}/>
      <AllProducts/>


      {! this.state.showCart ? <CheckoutBtn clicked={this.openCartHandler} /> 
          : 
          <>
          <CartWrapper/>
          <div className="reuseModalParentWrapper">
          <Cart close={this.openCartHandler} >
           {this.cartDisplayHandler()}
           </Cart> 
          </div>
         </>
            }

    </div>

    )
  }
} 

const mapStateToProps = (state)=> {
  return{
      products: state.products,
      productsDistribution: state.productsDistribution
  }
}
       
  

export default connect(mapStateToProps)(ContentWrapper);