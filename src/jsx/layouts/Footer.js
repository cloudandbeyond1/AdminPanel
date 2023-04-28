import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
   return (
      <div className="footer">
         <div className="copyright">
            <p>
               Copyright © Designed &amp; Developed by{" "}
               <Link to="http://dexignzone.com/" target="_blank">
                  DexignZone
               </Link>{" "}
               2020
            </p>
         </div>
      </div>
   );
};

export default Footer;
