import React from 'react';

const groceryItem = (props)=> {
    return(
        <button className="grocery-item">
            <span className="grocery-item-icon-wrapper">
                <img src={props.img} style={{minWidth: '15px',maxWidth: '20px', maxHeight: '19px'}}/>
            </span>
           {props.name}
        </button>
    )
}

export default groceryItem;