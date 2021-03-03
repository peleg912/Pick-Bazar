import React, { Component } from 'react';
import MyHead from './myHead';
import Navbar from '../navbar/navbar';
import Cart from '../checkout/cart';
import EmptyCart from '../checkout/emptyCart';
import CartButton from '../checkout/cartButton';
import DemosButton from './demosButton';
import {connect} from 'react-redux';
import CartItemWrapper from '../checkout/cartItemWrapper';;
import CartItem from '../checkout/cartItem';

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
                <CartItemWrapper>
                    {this.props.products.map(p=> (
                        <CartItem 
                        key={p.title}
                        title={p.title}
                        price={p.price}
                        img={p.img}/>
                    ))}
                </CartItemWrapper>

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
        products: state.products
    }
}


export default connect(mapStateToProps)(MainLayout);
