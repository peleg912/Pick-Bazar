import React from 'react';

const languageItem = (props)=> {
    return(
        <button className="lang-btn-container">
            <span className="flag-wrapper">
                <img src={props.img} style={{display: 'block', width: '20px', height: 'auto', boxSizing: 'border-box'}} />
            </span>
              {props.name}
         </button>
    )
}

export default languageItem;