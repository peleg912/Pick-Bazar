import React from 'react';
import GroceryItem from './groceryItem';
import groceryItems from '../../utills/groceryItems';

const groceryMenu = (props)=> {
    return(
       <div className="grocery-menu-container">
           <div className="grocery-menu-inner">
                <div style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box', cursor: 'pointer', margin: '0px'}}>
                  {groceryItems.map(item=> {return(
                      <GroceryItem key={item.name} name={item.name} img={item.img}/>
                  )})}
                </div>
           </div>
       </div>
    )
}

export default groceryMenu;