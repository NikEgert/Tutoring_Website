import React from 'react';
import { Gi3dStairs } from 'react-icons/gi';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, CodeSteps} from './NavbarElements'
import { NavLink } from 'react-router-dom';

const Navbar = ({toggle}) => {
    return (
        <>
         <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
             <Gi3dStairs />
             <CodeSteps>CodeSteps</CodeSteps>
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
             <NavItem>
              <NavLinks to="about">About</NavLinks>
             </NavItem>
             <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
             </NavItem>
             <NavItem>
              <NavLinks to="services">Services</NavLinks>
             </NavItem>
            </NavMenu>
            <NavBtn>
             <NavBtnLink to="/contact">Contact Us</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar;