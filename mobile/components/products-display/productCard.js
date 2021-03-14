import React from 'react';

const productCard = (props)=> {
    return(
     <div className="dncxKl">

          <div className="jOFDKQ">
            <img src={props.img} className="hDtVJU"/>
          </div>

        <div className="bJhDda">

            <div className="hzdvQm">
              <span className="ecebTG">${props.price}</span>
            </div>

            <h2 className="zYpot">{props.title}</h2>

            <button aria-label="add item to cart" className="byhaCB">
              <div className="oExpm">Add</div>
              <span className="bQxKjU">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><path data-name="Path 9" d="M143.407,137.783h-1.25v4.375h-4.375v1.25h4.375v4.375h1.25v-4.375h4.375v-1.25h-4.375Z" transform="translate(-137.782 -137.783)" fill="currentColor"></path></svg>
              </span>
            </button>

         </div>

      </div>

    )
}

export default productCard;