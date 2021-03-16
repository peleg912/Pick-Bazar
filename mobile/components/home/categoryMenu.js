import React, { Component } from 'react';
import ProductsListModal from './productsListModal';
import {connect} from 'react-redux';

class CategoryMenu extends Component{
    state={
        open: false
    }

    modalHandler=()=> {
        const boolean = this.state.open;
        this.setState({open: !boolean});
    }


    render(){
        return(
            <>
         <div className="dzbhXd">
            <div >
              <div style={{position: 'relative', transform: 'translate3d(0px, 0px, 0px)'}}>
                  <div className="dNgrir" style={{backgroundColor: 'rgb(255, 255, 255)', paddingTop: '15px', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 2px'}}>
                      <div className="eJmvPm">
                          {this.props.path === '/'?
                          <span >No Category Selected</span> :
                          <span className="isAmBG">{this.props.category}</span>}
                      </div>

                     


                        <button className="jNBJTJ" onClick={this.modalHandler}>Filter</button>
                      </div>
                  </div>
              </div>
          </div>

          {this.state.open ? 
        <ProductsListModal clicked= {this.modalHandler}/> : null}
        </>
        )
    }
}

const mapStateToProps = (state)=> {
    return{
        category: state.currentCategory
    }
}

export default connect(mapStateToProps)(CategoryMenu);