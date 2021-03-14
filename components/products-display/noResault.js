import React from 'react';
import Link from 'next/link';

const noResault = ()=> {
    return (
        <div className="NoResultWrapper web">
            <h3>Sorry, No result found :(</h3>
            <div className="no-resultstyle__ImageWrapper">
              <img src="https://shop-redq.vercel.app/_next/static/images/no-result-a242b3bc908f26b79710c3d30f5230ac.svg" alt="No Result"></img>
            </div>

           <div className="no-resultstyle__ButtonWrapper">
               <div>
                       <Link href="/">
                          <a>
                   <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" fill="currentColor" stroke="currentColor"></path></svg> 
                         Go Back
                   </button>
                          </a>
                       </Link>
                </div>
            </div>
        </div>
    )
}

export default noResault;