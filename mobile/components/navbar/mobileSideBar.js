import React, { Component } from 'react';
import SideDrawerItem from './sideDrawerItem';

class mobileSideBar extends Component{

    state = {
        titles: [{t: "Home", href: "/"}, {t: "Profile", href: "/"}, {t: "Checkout", href: "/checkout"},
        {t: "Checkout Alternative", href: "/"}, {t: "Your Order", href: "/"}, {t: "Order Invoice", href: "/order-received"},
        {t: "Teams and Services", href: "/"}, {t: "Privacy Policy", href: "/"}, {t: "Need Help ?", href: "/help"},
        {t: "Offer", href: "/"}
        ]
        
    }


 render(){
   return(

 <div className="drawer-content-wrapper" style={{width: '316px'}} id="drawer">
  <div className="drawer-content">
          
     <div onClick={this.props.clicked}>
        <div className="headerstyle__DrawerClose">
          <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
        </div>
     </div>
          
    <div>
        <div className="os-host ">
          
         <div className="os-resize">
           <div className="os-resize-observer" style={{left: '0px', right: 'auto'}}></div>
         </div>
          
          <div className="observed" style={{height: 'calc(100% + 1px)', float: 'left'}}>
             <div className="os-c"></div>
        </div>
          
          <div className="os-content-glue" style={{margin: '0px', height: '782px', width: '315px'}}></div>   
        
         <div className="os-b">
            <div className="os-a">
            <div className='os-content' style={{padding: '0px', height:'auto', width: '100%'}}>
        
              <div className="headerstyle__DrawerContentWrapper">
                    <div className="rSdmp">
                        <div className="fIumYS">
                            <button >Join In</button>
                        </div>
                    </div>
        
                    <div className="eYfdlg">
                        
                        {this.state.titles.map(obj=> { return(
                            <SideDrawerItem
                            key={obj.t}
                            title={obj.t}
                            href={obj.href}/>
                        )})}
                     
                    
                 </div>
              </div>
            </div>


            <div className="os-horizontal">
             <div className="os-scrollbar-track">
                <div className="os-scrollbar-handle" style={{width: "100%", transform: "translate(0px, 0px)"}}></div>
             </div>
            </div>

            <div className="os-vertical">
                <div className="os-scrollbar-track">
                    <div className="os-scrollbar-handle" style={{height: "100%", transform: "translate(0px, 0px)"}}></div>
                </div>
           </div>            


             <div className="os-scrollbar-corner"></div>
           </div>         
         </div>
       </div>
     </div>
   </div>
 </div> 

        )
      }
 } 
   

export default mobileSideBar;