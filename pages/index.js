import React, { Component } from 'react';
import SideBar from '../components/side-menu/sideBar';
import Banner from '../components/home/banner';
import AllProducts from '../components/products-display/allProducts';
import CategoryProducts from '../components/products-display/categoryProducts';
import {connect} from 'react-redux';


class Home extends Component{

    state = {
      showAllProducts : true,
    }

  
    showReqCategoryHandler = ()=> {
      this.setState({showAllProducts: false});
   
    }

  
    render(){
      const {categories} = this.props;
    
        return(
         <div className="container" style={{marginLeft: '0', marginTop:'110px'}}>

           <div className="row ">
             <div className="col-4 align-self-start" >
             <SideBar categories={categories} clicked={this.showReqCategoryHandler}/>
             </div>
              <div className="col-8" style={{height: '350px'}} >
               <Banner />
               {this.state.showAllProducts ?
               <AllProducts/> : 
               <CategoryProducts/>}
              </div>
            
           </div>

         </div>
         
        )
    }
}

const mapStateToProps = (state)=> {
  return{
    products: state.products
  }
}





export default connect(mapStateToProps)(Home);