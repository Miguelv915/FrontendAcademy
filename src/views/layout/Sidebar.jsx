import { NavLink } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";

const Sidebar = () =>{
  return (
    <div className="sidebar bg-light">
      <ul>
        <li>
          <NavLink to="home" className={({ isActive }) => isActive? "text-primary rounded py-1 px-3 w-100 d-inline-block active": 'text-primary rounded py-1 px-3 w-100 d-inline-block' } ><FaIcons.FaHome className="me-2" />GENERAL</NavLink>
        </li>
        <li>
          <NavLink to="salas" className={({ isActive }) => isActive? "text-primary rounded py-1 px-3 w-100 d-inline-block active": 'text-primary rounded py-1 px-3 w-100 d-inline-block' } ><FaIcons.FaMoneyCheckAlt className="me-2" /> STOCK</NavLink>
        </li>
        <li>
          <NavLink to="clientes" className={({ isActive }) => isActive? "text-primary rounded py-1 px-3 w-100 d-inline-block active": 'text-primary rounded py-1 px-3 w-100 d-inline-block' } ><FaIcons.FaNetworkWired className="me-2" /> REPORT</NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar;
/**
 * activeClassName="active"
 * exact
 * className="text-primary rounded py-1 px-3 w-100 d-inline-block"
 * import React, { Component } from "react";


class Navigation extends Component {
  render() {
    return <div>navegacion v
    </div>
  }
}
export default Navigation;**/
