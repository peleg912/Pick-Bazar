import React from 'react';

const thumbnail = (props)=>{
    return(
        <li data-index="0" className="thumbnail">
            <img src={props.img}
             style={{width: '100%', height: '100%', position: 'relative'}}/>
        </li>

    )
}

export default thumbnail;