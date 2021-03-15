import React from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';

const categoryCard = (props)=> {
    return(

        <div onClick={()=>props.onUpdateCategory(props.name)}>
        <Link  as={`/${props.name}`}
        href={{
        pathname: '/',
        query: {
        category: props.name}}}>
         <a>
        <div role="button" className="kfKqHQ">
            <div height="80" display="flex" className="rkSUS">
                <img src={props.img} width="20.347" height="24.101" style={{height: '40px', width: 'auto'}}/>
            </div>
            <span color="#212121" fontSize="14" fontWeight="600" className="jwzWpz">{props.name}</span>
        </div>
        </a>
      </Link>
      </div>
    )
}

const mapDispatchToProps = (dispatch)=> {
    return {
      onUpdateCategory : (categoryName)=> dispatch({type: 'UPDATE_CATEGORY', category: categoryName})
    }
  }

export default connect(null, mapDispatchToProps)(categoryCard);