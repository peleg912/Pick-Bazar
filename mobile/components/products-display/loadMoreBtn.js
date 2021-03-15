import React from 'react';


const loadMoreBtn = (props)=> {
    return(
        <div style={{textAlign:'center'}} className="ejsBAM" onClick={props.clicked}>
          <div style={{fontSize:'14px', display:'inline-flex'}} role="button" className="iZvlvx">
            Load More
          </div>
        </div>
    )
}

export default loadMoreBtn;