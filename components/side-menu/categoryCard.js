import React from 'react';

const categoryCard = (props)=> {
    return(
        <>
        <div className="Cat-Card-Container" onClick={props.clicked}>
            <div className="Cat-Card">
                <img 
                style={{height:'40px',width:'auto'}}
                src={props.catImg}/>
            </div>
            <span className="cat-card-title">
                {props.catName}
            </span>
        </div>
       </>
    )
}

export default categoryCard;

