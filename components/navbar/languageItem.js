import React from 'react';
import {connect} from 'react-redux';

const languageItem = (props)=> {

    const changeLang = ()=> {
        props.onChangingLang(props.name);
    }

    return(
        <button className="lang-btn-container" onClick={changeLang}>
            <span className="flag-wrapper">
                <img src={props.img} style={{display: 'block', width: '20px', height: 'auto', boxSizing: 'border-box'}} />
            </span>
              {props.name}
         </button>
    )
}

const mapDispatchToProps = (dispatch)=> {
    return{
        onChangingLang: (lang)=> dispatch({type: "CHANGE_LANG", language: lang})
    }
}

export default connect(null, mapDispatchToProps)(languageItem);