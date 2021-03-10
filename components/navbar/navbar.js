import React from 'react';
import { Component } from 'react';
import GroceryMenu from './groceryMenu';
import LanguageMenu from './languageMenu';
import Link from 'next/link';
import allProducts from '../../utills/products/allProducts';
import {connect} from 'react-redux';
import translation from '../../utills/translation';


class Navbar extends Component{

  state = {
    groceryMenu: false,
    languageMenu: false,
    searchTerm: ''
  }

  
  componentDidUpdate(){
    // console.log(this.props.path);
    // if(this.props.path === '/help' || '/checkout' || "/order-received"){
    //   document.getElementById("myForm").setAttribute("hidden", "true");
    // } ;

    // if(this.props.path !== '/help' || '/checkout' || "/order-received"){
    //   document.getElementById("myForm").removeAttribute("hidden");
    // }

   
  }

  search = ()=>{ 
    let searchResaults = [];
    if (this.state.searchTerm === ""){
      return;
    }

    allProducts.forEach(obj=>{
      obj.data.forEach(p=> {
        if (p.title.toLowerCase().includes(this.state.searchTerm)){
          searchResaults.push(p);
        }
      })
    });

    this.props.onSavingResults(this.state.searchTerm, searchResaults);
    this.setState({searchTerm: ""});
  }



 GroceryMenuHandler = ()=> {
      const boolean = this.state.groceryMenu;
      this.setState({groceryMenu: ! boolean});
  }

 languageMenuHandler = ()=> {
    const boolean = this.state.languageMenu;
    this.setState({languageMenu: ! boolean});
}

searchBarHandler = (event)=> {
  this.setState({searchTerm: event.target.value});
}

    render(){
        return(

     <header className="header-container" id="layout-header">

       <div className="header-left-menu">

         <span className="header-logo">
           <Link href="/">
            <a>
             <img src="/static/images/logo.svg" alt="Shop Logo" className="logo-img"/>
            </a>
           </Link>
          </span>

    <div className="header-grocery-chooser-container">

        <div className="header-grocery-chooser">
         <div className="popover-handler">

         <button className="popover-btn" onClick={this.GroceryMenuHandler}>
           <span style={{marginRight: 'auto', display: 'flex'}}>
             <div className="left-menu-icon">
               <svg style={{minWidth: '15px', maxWidth: '20px', maxHeight: '19px', boxSizing: 'border-box', overflow: 'hidden'}} xmlns="http://www.w3.org/2000/svg" width="20.347" height="24.101" viewBox="0 0 20.347 24.101"><g id="Grocery" transform="translate(-39.481 0.052)"><path id="Path_17386" data-name="Path 17386" d="M349.261,399.988a.469.469,0,1,1,.461-.385A.473.473,0,0,1,349.261,399.988Z" transform="translate(-294.289 -380.346)" fill="currentColor" stroke="currentColor" strokeWidth="0.1"></path><path id="Path_17387" data-name="Path 17387" d="M58.743,8.638A6.2,6.2,0,0,0,55.4,6.3a6.662,6.662,0,0,0-3.058.055h0l-.034.008-.091.02c-.074.017-.188.045-.31.076-.16.041-.323.078-.485.108q0-.182-.014-.374a6.162,6.162,0,0,1,1.87-3.956A6.643,6.643,0,0,1,55.212.9.469.469,0,0,0,54.87.032a7.448,7.448,0,0,0-2.223,1.509,7.229,7.229,0,0,0-1.659,2.437,4.837,4.837,0,0,0-1.119-1.837C47.744.019,43.762.68,43.527.721h0a.457.457,0,0,0-.367.314.6.6,0,0,0-.017.066c-.027.151-.573,3.346.8,5.557a7.353,7.353,0,0,0-3.914,6.923,11.6,11.6,0,0,0,1.142,4.581,14.2,14.2,0,0,0,2.744,4.091A5.044,5.044,0,0,0,47.309,24a6.6,6.6,0,0,0,1.88-.276A3.331,3.331,0,0,1,51,23.691l.006,0,.11.031A6.6,6.6,0,0,0,53,24a4.912,4.912,0,0,0,3.25-1.608,13.985,13.985,0,0,0,4.029-8.812A8.163,8.163,0,0,0,58.743,8.638ZM49.206,2.8a5.247,5.247,0,0,1,1.256,3.409c-.017.211-.025,1.132-.025,1.132L46.881,3.794a.469.469,0,0,0-.663.663L49.8,8.033c-1.224.066-3.343-.027-4.572-1.255C43.75,5.3,43.912,2.552,44.02,1.6c.953-.108,3.709-.27,5.185,1.2ZM55.6,21.716A4.033,4.033,0,0,1,53,23.062a5.728,5.728,0,0,1-1.609-.236l-.141-.04h0a4.269,4.269,0,0,0-2.329.04,5.728,5.728,0,0,1-1.609.236A4.172,4.172,0,0,1,44.58,21.59a13.058,13.058,0,0,1-3.612-8.009c0-3.445,1.878-5.444,3.571-6.163l.024.024a6.632,6.632,0,0,0,4.665,1.547A9.91,9.91,0,0,0,50.9,8.863c.374-.082.365-.256.388-.364V8.482a9.219,9.219,0,0,0,.107-.965.475.475,0,0,0,.083-.007c.22-.038.441-.085.658-.142.084-.022.165-.042.232-.058,1.934.674,3.846,2.849,3.846,6.269a9.857,9.857,0,0,1-.747,3.455.469.469,0,1,0,.874.339,10.789,10.789,0,0,0,.811-3.795,7.594,7.594,0,0,0-3.162-6.493,4.317,4.317,0,0,1,1.17.122c2.013.521,4.18,2.737,4.18,6.371A13.138,13.138,0,0,1,55.6,21.716Z" transform="translate(-0.5)" fill="currentColor" stroke="currentColor" strokeWidth="0.1"></path></g></svg>
             </div>
              <span className="chooser-title">Grocery Two</span>
          </span>

          <span className="left-menu-arrow">
            <svg style={{minWidth: '15px', maxWidth: '20px', maxHeight: '19px', boxSizing: 'border-box', overflow: 'hidden'}} xmlns="http://www.w3.org/2000/svg" width="12px" height="6px" viewBox="0 0 12 6"><path id="Path_2897" data-name="Path 2897" d="M0,63.75l6,6,6-6Z" transform="translate(0 -63.75)" fill="currentColor"></path></svg>
            </span>
           </button>
           </div>
              
          {this.state.groceryMenu ?
          <GroceryMenu/>: null}
        
          </div>
          </div>
         </div>

           <form className="header-search" id="myForm">
             <div onClick={this.search} style={{cursor: "pointer"}}>
               <Link  as={`/?search=${this.state.searchTerm}`}
                     href={{
                      pathname: '/',
                       query: {
                       search: this.state.searchTerm
                     }}}>
                 <a>
                  <svg  xmlns="http://www.w3.org/2000/svg" width="17px" height="18px" viewBox="0 0 17.048 18" style={{boxSizing: 'border-box', overflow: 'hidden',marginLeft:'16px', marginRight:'16px', color:'#212121'}}><path id="Path_142" data-name="Path 142" d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z" transform="translate(-367.297 -371.285)" fill="currentColor"></path></svg>
                 </a>
               </Link>
             </div>
             <input
             type="search" 
             value={this.state.searchTerm} 
             name="search" 
             placeholder="Search your products from here" 
             className="header-input"
             onChange={(event)=>this.searchBarHandler(event)}/>
            </form>

          <div className="header-right-menu" >
            <div className="menu-item">
              <a className="" style={{display:'flex',alignItems: 'center'}} href="#">
             <span className="label">{translation[this.props.lang].toolbar.offer}</span>
             </a>
             </div>
             
             <div className="menu-item" >
               <Link href="/help">
               <a className="" style={{display:'flex', alignItems: 'center'}} >
                 <span className="left-menu-ques-mark">
                   <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 14 14"><path id="Path_111" data-name="Path 111" d="M269.443,404.312a7,7,0,1,0,7,7,6.98,6.98,0,0,0-7-7Zm.635,10.818a.3.3,0,0,1-.319.319h-.635a.3.3,0,0,1-.319-.319v-.635a.3.3,0,0,1,.319-.319h.635a.3.3,0,0,1,.319.319Zm.859-2.832c-.446.382-.763.637-.859.987a.308.308,0,0,1-.319.255h-.635a.309.309,0,0,1-.319-.35,2.988,2.988,0,0,1,1.336-1.876c.574-.446.892-.732.892-1.274a1.591,1.591,0,1,0-3.182,0v.191a.3.3,0,0,1-.224.351l-.6.189a.318.318,0,0,1-.414-.253,2.363,2.363,0,0,1-.033-.479,2.864,2.864,0,0,1,5.729,0,2.792,2.792,0,0,1-1.369,2.259Zm0,0" transform="translate(-262.442 -404.312)" fill="currentColor"></path></svg>
                  </span>
                  <span className="label">{translation[this.props.lang].toolbar.help}</span>
                </a>
               </Link>
              </div>

              <div className="header-languages">
                <div className="header-languages-a">
                     <div className="popover-handler">
                       <button className="language-switch" onClick={this.languageMenuHandler}>
                       <div className="language-switch-flag-icon">
                     <svg style={{width: '20px', height: 'auto'}} xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 640 480" width="640px" height="480px"><g fillRule="evenodd"><g strokeWidth="1pt"><path fill="#bd3d44" d="M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z" transform="scale(.9375)"></path><path fill="#fff" d="M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z" transform="scale(.9375)"></path></g><path fill="#192f5d" d="M0 0h389.1v275.7H0z" transform="scale(.9375)"></path><path fill="#fff" d="M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z" transform="scale(.9375)"></path></g></svg>
                     </div>

                     <span className="english-title">{translation[this.props.lang].toolbar.lang}</span>
                     </button>

                 </div>

                    {this.state.languageMenu ? <LanguageMenu/> : null}

               </div>
              </div>

              <button className="header-join-btn">{translation[this.props.lang].toolbar.join}</button>
             </div>
          </header>
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
  return{
    onSavingResults: (term ,array)=> dispatch({type: "ADD_SEARCH_RES",search: term, data: array})
  }
}

const mapStateToProps =(state)=> {
  return{
    lang: state.currentLang
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar);