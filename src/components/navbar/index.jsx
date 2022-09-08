import React, { useState, useEffect, Fragment } from "react";


const Navbar = ({ item }) => {

  return (
      <Fragment>

    <div className="leftbar">
        <div className="leftbar_top">
            <img alt="" src="https://uploads-ssl.webflow.com/62c55bae09e0c918864f54ef/62c567965f116e0fc0d08146_favicon.png" />
            <p>Zohaib</p>
        </div>
        <div className="leftbar_items">
               <ul>


                <li><span>-1</span><a href="#section-1">About Mazil</a></li>
                <li><span>-2</span><a href="#section-2">Background And Skills</a></li>
                <li><span>-3</span><a href="#section-3">Team (photos)</a></li>
                <li><span>-4</span><a href="#section-4">Previous Clients</a></li>
                <li><span>-5</span><a href="#section-5">Social Media Links</a></li>
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