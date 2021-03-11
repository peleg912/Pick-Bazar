import React from 'react';
import translation from '../../utills/translation';
import {connect} from 'react-redux';

const footer = (props)=> {
    return(
        <div className="help-footer">
           {translation[props.lang].help.credit} &nbsp;
           <span style={{color: "rgb(0, 158, 127)"}}>  Peleg Adiv  </span>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return{
        lang: state.currentLang
      }
    } 
    

export default connect(mapStateToProps)(footer);