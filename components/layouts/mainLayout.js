import React, { Component } from 'react';
import MyHead from './myHead';
import Navbar from '../navbar/navbar';
import Cart from '../cart/cart';
import EmptyCart from '../cart/emptyCart';
import CartButton from '../cart/cartButton';
import DemosButton from './demosButton';
import {connect} from 'react-redux';
import CartItemsWrapper from '../cart/cartItemWrapper';;
import CartItem from '../cart/cartItem';

class MainLayout extends Component {

    state={
        showCheckout: false
    }

    openCheckoutHandler = ()=> {
        this.setState({showCheckout : true});
    }
   
    closeCheckoutHandler= ()=> {
      this.setState({showCheckout: false});
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
    };


    render(){
        return(
            <>
            <MyHead/>
   
             <div >
                 <Navbar/>
             </div>
   
             {! this.state.showCheckout ? <CartButton clicked={this.openCheckoutHandler}/> 
              : <Cart close={this.closeCheckoutHandler}>
               {this.cartDisplayHandler()}
              </Cart>  }
              
              <DemosButton/>
   
             <div >
                 {this.props.children}
             </div>
             <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"/>
           </>
        )
    }
  
   
}

const mapStateToProps = (state)=> {
    return{
        products: state.products,
        productsDistribution: state.productsDistribution
    }
}


export default connect(mapStateToProps)(MainLayout);
