import React, { Component } from 'react';
import Answer from './answer';
import translation from "../../utills/translation";
import {connect} from 'react-redux';

class qst extends Component{

    state = {
        open: false
    }

    answerHandler = ()=> {
        const boolean = this.state.open;
        this.setState({open: !boolean});
    }

    render(){
        return(
            <>
    <div className="qst-container">
        <div className="qst-title">
        <i className="qst-icon" data-bs-toggle="collapse" data-bs-target={this.props._id} onClick={this.answerHandler}>
            {!this.state.open?
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path data-name="_ionicons_svg_ios-add (7)" d="M138.753,132.753h-4.506v-4.506a.747.747,0,1,0-1.494,0v4.506h-4.506a.747.747,0,0,0,0,1.494h4.506v4.506a.747.747,0,1,0,1.494,0v-4.506h4.506a.747.747,0,1,0,0-1.494Z" transform="translate(-127.5 -127.5)" fill="currentColor"></path></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="1.494" viewBox="0 0 12 1.494"><path data-name="_ionicons_svg_ios-remove (4)" d="M138.753,240H128.247a.747.747,0,0,0,0,1.494h10.506a.747.747,0,1,0,0-1.494Z" transform="translate(-127.5 -240)" fill="currentColor"></path></svg>
            }
        </i>
    
        <h3 className="qst-body">{translation[this.props.lang].help[this.props.id]}</h3>
        </div>
        </div>

        <div className="collapse" id={this.props.id} >
       
        <Answer className="collapse" id="collapseExample" 
            answer={translation[this.props.lang].help[this.props.__id]}/>
        </div>

  </>

    )
   }

  }


const mapStateToProps = (state)=> {
return{
    lang: state.currentLang
  }
} 

   
export default connect(mapStateToProps)(qst);


