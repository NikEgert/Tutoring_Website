import React from 'react';
import { TbRobot } from "react-icons/tb";
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, CodeHead} from './NavbarElements'
import { NavLink } from 'react-router-dom';

const Navbar = ({toggle}) => {
    return (
        <>
         <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
             <TbRobot />
             <CodeHead>CodeHead</CodeHead>
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
              <NavLinks to="learning">Learning</NavLinks>
             </NavItem>
             <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
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