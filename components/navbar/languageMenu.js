import React from 'react';
import languages from '../../utills/languages';
import LanguageItem from './languageItem';

const languageMenu = (props)=> {
    return(
       <div className="lang-menu-container">
           <div className="lang-menu-inner">
                  {languages.map(lang=> {return(
                      <LanguageItem key={lang.name} name={lang.name} img={lang.img}/>
                  )})}
           </div>
       </div>
    )
}

export default languageMenu;