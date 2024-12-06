import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrapper, SidebarMenu, SidebarLink, SidebarRoute } from './SidebarElements';

const SideBar = ({isOpen,toggle}) => {
    return (
        <>
         <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
           <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
             <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
             <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
             <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
            </SidebarMenu>
            <SideBtnWrapper>
             <SidebarRoute to="/contact" onClick={toggle}>Contact Us</SidebarRoute>
            </SideBtnWrapper>
          </SidebarWrapper>
         </SidebarContainer>
        </>
    )
}

export default SideBar;