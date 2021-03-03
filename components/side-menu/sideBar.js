import React from 'react';
import { Component } from 'react';
import CategoryCard from './categoryCard';
import Link from 'next/link';
import categories from '../../utills/categories';
import {connect} from 'react-redux';

class SideBar extends Component{

    render(){
        return(
            <div className="container Cat-Grid-Container ">
            <div className="row">
                {categories.map(cat=> {
                    return(
                          <div className="col-lg-6 " key={cat.name} onClick={()=>this.props.onUpdateCategory(cat.name)}>
                        <Link
                        as={`/${cat.name}`}
                        href={{
                            pathname: '/',
                            query: {
                                category: cat.name
                            }
                          }}>
                              <a>
                            <CategoryCard  catName={cat.name} catImg={cat.img} clicked={this.props.clicked} />
                            </a>
                       </Link>
                          </div>
                        

                    )
                })}
           
           </div>
           </div>
              
        )
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
      onUpdateCategory : (categoryName)=> dispatch({type: 'UPDATE_CATEGORY', category: categoryName})
    }
  }

export default connect(null, mapDispatchToProps)(SideBar);

