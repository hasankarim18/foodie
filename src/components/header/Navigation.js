import React, {useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import {NavLink} from 'react-router-dom';




const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=> {
      setIsOpen((prev)=> !prev)
  }

  return (
    <div className="bg-dark">
      <Navbar
        className="container  border-start border-danger-subtle border-end"
        color="dark"
        dark
        expand="md"
      >
        <NavLink className="navbar-brand" to="/">
          Foodie
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className={(isActive)=> 'nav-link' + (isActive? ' active ' :'')} exact to="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" exact to="/menu">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" exact to="/contact">
                Contact us
              </NavLink>
            </NavItem>
            <NavItem>
              <a
                rel="noreferrer"
                className="nav-link"
                target="_blank"
                href="https://github.com/hasankarim18/foodie"
              >
                Project Github Link
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation
