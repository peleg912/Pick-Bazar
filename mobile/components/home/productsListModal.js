import React, { Component } from 'react';
import categories from '../../../utills/categories';
import CategoryCard from './categoryCard';
import Link from 'next/link';

class ProductsListModal extends Component{
    render(){
        return(
            <div id="modal-root">
              <div>
                <div className="BottomModal">
                    <div style={{transform: 'translateY(0%) translateY(0px) translateX(-50%)', position: 'absolute', bottom: '0px', left: '50%', padding: '0px', width: 'calc(100% + 1px)', height: '100%', maxHeight: '70vh', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '20px 20px 0px 0px', zIndex: '99999'}}>
                    <button onClick={this.props.clicked} type="button" style={{width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(13, 17, 54)', border: '0px', outline: '0px', boxShadow: 'none', borderRadius: '50%', position: 'absolute', top: '-55px', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10" style={{width: '12px', height: '12px'}}><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
                    </button>
                    <div className="os-host" style={{height:'100%', maxHeight:'100%'}}>
                    <div style={{overflowY: scroll}}>
                    <div style={{padding: '30px'}}>
                        <div className="jHtLDW">
                          {categories.map(obj=>(
                                <CategoryCard
                                key={obj.name}
                                name={obj.name}
                                img={obj.img}
                                />
                            ))}
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
              </div>

            </div>
        )
    }
}

export default ProductsListModal;