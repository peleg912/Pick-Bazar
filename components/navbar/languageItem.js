import React from 'react';
import {connect} from 'react-redux';
import translation from '../../utills/translation';

const languageItem = (props)=> {

    const changeLang = async ()=> {
       await props.onChangingLang(props.name);
       await props.clicked();
    }

    return(
        <button className="lang-btn-container" onClick={changeLang}>
            <span className="flag-wrapper">
                <img src={props.img} style={{display: 'block', width: '20px', height: 'auto', boxSizing: 'border-box'}} />
            </span>
              {translation[props.lang].languages[props.name]}
         </button>
    )
}

const mapDispatchToProps = (dispatch)=> {
    return{
        onChangingLang: (lang)=> dispatch({type: "CHANGE_LANG", language: lang})
    }
}

const mapStateToProps = (state)=> {
    return{
        lang: state.currentLang
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(languageItem);