import React, { useState, useEffect, Fragment } from "react";


const Navbar = ({ index }) => {

  return (
      <Fragment>

    <div className="leftbar">
        <div className="leftbar_top">
            <img alt="" src="https://uploads-ssl.webflow.com/62c55bae09e0c918864f54ef/62c567965f116e0fc0d08146_favicon.png" />
            <p>Zohaib</p>
        </div>
        <div className="leftbar_items">
               <ul>
                    <li>About mazil</li>
                    <li>Background And Skills</li>
                    <li>Team (photos)</li>
                    <li>Previous Clients</li>
                    <li>Social Media Links</li>
               </ul>
        </div>
        {/* <div className="left_bar_all">
            <div className="left_bar_items">
                <div className="left_bar_items_text">Users</div>
            </div>
        </div> */}
    </div> 
      
    </Fragment>
  );
};

export default Navbar;
