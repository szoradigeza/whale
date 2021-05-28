import React from 'react';
import { DEMO } from '../../../redux/constants';

//import { ReactComponent as PSLogo } from '../../../assets/ps-logo.svg';

const navLogo = (props) => {
   let toggleClass = ['mobile-menu'];
   if (props.collapseMenu) {
      toggleClass = [...toggleClass, 'on'];
   }

   return (
      <React.Fragment>
         <div className="navbar-brand header-logo">
            <a href={DEMO.BLANK_LINK} className="b-brand">
               <div className="b-bg">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="white"
                  >
                     <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                  </svg>
               </div>
               <span className="b-title">Ipar 4.0</span>
            </a>
            <a
               href={DEMO.BLANK_LINK}
               className={toggleClass.join(' ')}
               id="mobile-collapse"
               onClick={props.onToggleNavigation}
            >
               <span />
            </a>
         </div>
      </React.Fragment>
   );
};

export default navLogo;
