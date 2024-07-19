import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,

  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';

/** NavbarText,NavItem,
  NavLink,
  <NavbarBrand href="/">reactstrap</NavbarBrand>  NavbarBrand,
   */

function NavbarNav(args) {

  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const onClickCerrar = () => {
    //alert("cerrar")
    document.getElementById('idFlex').className = "d-none"
    navigate("/")   
  }

  return (
    <div>
      <Navbar {...args} color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Washington More
              </DropdownToggle>
              <DropdownMenu className='fin'>
                <DropdownItem>Perfil</DropdownItem>
                <DropdownItem>Config</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={onClickCerrar}>Close</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarNav;


/**const Navbar = () =>{
  return (
    <div className="navbar">Navbar</div>
  )
}
export default Navbar;
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return <div>navegacion h</div>
  }
}
export default Navbar;**/