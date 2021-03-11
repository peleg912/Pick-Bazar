import React from 'react';


const answer = (props)=> {
    return(
        <div className="answer-container"  >
            <div className="answer-wrapper">
            <p>
                {props.answer}
            </p>
            </div>
        </div>
    )
}

export default answer;