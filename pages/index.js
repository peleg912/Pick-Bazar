import React, { Component } from 'react';
import SideBar from '../components/side-menu/sideBar';
import Banner from '../components/home/banner';
import AllProducts from '../components/products-display/allProducts';
import CategoryProducts from '../components/products-display/categoryProducts';
import SearchedProducts from '../components/products-display/searchedProducts';
import NoResault from '../components/products-display/noResault';
import {connect} from 'react-redux';


class Home extends Component{


    state = {
      showAllProducts : true,
    }

  
    showReqCategoryHandler = ()=> {
      this.setState({showAllProducts: false});
    }

    componentDidUpdate(){
      if (this.props.path === '/'){
        return (
          <AllProducts/>
        )
      } else if( this.props.path.startsWith('/?search=')){
          if(this.props.searchRes.length > 0){
            return(
              <SearchedProducts/>
            )
          } else {
            return(
              <NoResault/>
            )
          }
      } else{
        return (
          <CategoryProducts/>
        )
      }
    }

    // productsDisplayHandler = ()=>{
    //   if(this.state.showAllProducts){
    //     return (
    //       <AllProducts/>
    //     )
    //   } else if(!this.state.showAllProducts){
    //       if(){
    //         return(

    //         )
    //       }else{
    //         return (

    //         )
    //       }
    //   }
    //   // {this.state.showAllProducts ?
    //   //  : 
    //   //   <CategoryProducts/>}
    // }

  
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
               {/* {this.state.showAllProducts ?
               <AllProducts/> : 
               <CategoryProducts/>} */}
               {this.componentDidUpdate()}
              </div>
            
           </div>

         </div>
         
        )
    }
}

const mapStateToProps = (state)=> {
  return{
    products: state.products,
    searchRes:  state.searchRes.res
  }
}





export default connect(mapStateToProps)(Home);