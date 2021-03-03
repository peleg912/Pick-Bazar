import React from 'react';
import languages from '../../../utills/languages';

const toolBar = (props)=> {
    return(

        <nav className="navbar navbar-expand-lg navbar-light tool-bar">
        <div className="container-fluid ">
     

        <a className="navbar-brand logo " href="#">
         <img src="/static/images/logo.svg"  className="d-inline-block align-top"/>
        </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent"> 

           <ul  className="navbar-nav me-auto mb-2 mb-lg-0 nav-item">
             <li  className="dropdown drop col-lg-2" color="rgb(0, 158, 127)">
              <button  className="nav-link dropdown-toggle grocery-btn " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Grocery Two
             </button>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a  className="dropdown-item" href="#">Action</a></li>
                <li><a  className="dropdown-item" href="#">Another action</a></li>
                <li><a  className="dropdown-item" href="#">Something else here</a></li>
             </ul>
            </li> 

            <li className="nav-item">
            <form className="d-flex input-group search-bar">
            <svg  className="glass" xmlns="http://www.w3.org/2000/svg" width="17px" height="18px" viewBox="0 0 17.048 18" style={{marginLeft:'16px',marginRight:'16px',color:'#212121'}}><path id="Path_142" data-name="Path 142" d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z" transform="translate(-367.297 -371.285)" fill="currentColor"></path></svg>
           <input className="form-control me-2" type="search" placeholder="Search your products here" aria-label="Search"/>
            </form>
            </li>

            <li className="nav-item nav-btn">
               <a className="nav-link active" aria-current="page" href="#">Offer</a>
             </li>

             <li className="nav-item nav-btn">
               <a className="nav-link active" aria-current="page" href="#">
                 <span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 14 14"><path id="Path_111" data-name="Path 111" d="M269.443,404.312a7,7,0,1,0,7,7,6.98,6.98,0,0,0-7-7Zm.635,10.818a.3.3,0,0,1-.319.319h-.635a.3.3,0,0,1-.319-.319v-.635a.3.3,0,0,1,.319-.319h.635a.3.3,0,0,1,.319.319Zm.859-2.832c-.446.382-.763.637-.859.987a.308.308,0,0,1-.319.255h-.635a.309.309,0,0,1-.319-.35,2.988,2.988,0,0,1,1.336-1.876c.574-.446.892-.732.892-1.274a1.591,1.591,0,1,0-3.182,0v.191a.3.3,0,0,1-.224.351l-.6.189a.318.318,0,0,1-.414-.253,2.363,2.363,0,0,1-.033-.479,2.864,2.864,0,0,1,5.729,0,2.792,2.792,0,0,1-1.369,2.259Zm0,0" transform="translate(-262.442 -404.312)" fill="currentColor"></path></svg>
                 </span>
                   <span>Need Help</span>
                 </a>
             </li>

             <li className="nav-item dropdown nav-btn">
             <a className="nav-link dropdown-toggle lang-span" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   <img src="/static/images/english.svg"/>
                   English
             </a>
             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
               {languages.map(l=> (
                
                 <button key={l.name} className="lang-btn dropdown-item">
                   <span className="lang-span">
                   <img src={l.img}/>
                   </span>
                   {l.name}
                 </button>
              
               ))}
             </div>
             </li >

             <li className="nav-item">
             <button className="nav-link active join-btn" aria-current="page" href="#">Join</button>
             </li>
           </ul>
          </div>
        
         
        </div>
      </nav>
    )
}

export default toolBar;




