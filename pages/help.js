import React from 'react';
import Qst from '../components/help-page/qst';
import Footer from '../components/help-page/footer';
import qa from '../utills/qa';

const help = (props)=> {
    return(
        <div className="help-container">
            <div className="help-wrapper">
                <h3 className="help-header">F.A.Q</h3>
                <div className="accordion-wrapper">
                    <div className="accordion-wrapper-a">
                        {qa.map(obj=>(
                            <Qst
                            key={obj.id}
                             id={obj.id}
                            _id={obj._id}
                            a={obj.a}
                            q={obj.q}/>
                        ))}
                    </div>
                </div>
            </div>
             <Footer/>
        </div>
    )
}

export default help;