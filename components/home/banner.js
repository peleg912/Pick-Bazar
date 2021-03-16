import React from 'react';
import { Component } from 'react';

class banner extends Component {
    state = {
        img: [
            "/static/images/add2.jpg",
            "/static/images/ad1.jpg",
        ]
    };
    
    render (){
        return(
            <div className="ad-container">
            <div className="container carousel slide" id="carouselBannerControls" data-bs-ride="carousel">
             
              <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={this.state.img[0]} className="img-banner d-block w-100" />
                </div>

                <div className="carousel-item">
                    <img src={this.state.img[1]} className="img-banner d-block w-100" />
                </div>
               </div>

            <button className="arrow r-arrow carousel-control-next" data-bs-target="#carouselBannerControls"  data-bs-slide="next">
                <img src="/static/images/rArrow.svg"/>
            </button>

            <button className="arrow l-arrow carousel-control-prev" data-bs-target="#carouselBannerControls"  data-bs-slide="prev">
                <img src="/static/images/lArrow.svg"/>
            </button>

          </div>
       </div>
        )
    }
}

export default banner;