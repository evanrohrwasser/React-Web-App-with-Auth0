import React from 'react';

import {
  Link
} from "react-router-dom";

function Menu() {
  return (

    <div className="menu" aria-label="Navigation bar" id = "nav" itemScope>
    <ul>
        <li><Link itemProp="url" to = "/">Home</Link></li>
        <li><Link itemProp="url" to = "/dashboard">Dashboard</Link></li>
        <li><Link itemProp="url" to = "/about">About</Link></li>
        <li><Link itemProp="url" to = "/login">Login</Link></li>
      </ul>
</div>
  );
}

export default Menu;