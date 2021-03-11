import React from 'react';
import translation from '../../utills/translation';
import {connect} from 'react-redux';

const groceryItem = (props)=> {
    return(
        <button className="grocery-item">
            <span className="grocery-item-icon-wrapper">
                <img src={props.img} style={{minWidth: '15px',maxWidth: '20px', maxHeight: '19px'}}/>
            </span>
           {/* {props.name} */}
           {translation[props.lang].groceryMenu[(props.name).replace(/\s/g, "")]}
        </button>
    )
}

const mapStateToProps = (state)=> {
    return{
        lang: state.currentLang
    }
}

export default connect(mapStateToProps)(groceryItem);