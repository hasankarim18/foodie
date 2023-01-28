import React, {useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";




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
          <NavbarBrand href="/">Foodie</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/hasankarim18/foodie">
                  Project Github Link
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  )
}

export default Navigation
