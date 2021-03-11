import React from 'react';
import Link from 'next/link';

const sideDrawerItem = (props)=> {
    return(
        <div>
          <div>
              <Link href={props.href}>
               <a className="gLVTAU" style={{display: 'flex', alignItems: 'center'}}> 
                  <span className="label">{props.title}</span>
               </a>
              </Link>
         </div>
       </div>
    )
}

export default sideDrawerItem;