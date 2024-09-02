import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrapper, SidebarMenu, SidebarLink, SidebarRoute } from './SidebarElements';

const SideBar = () => {
    return (
        <>
         <SidebarContainer>
          <Icon>
           <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
             <SidebarLink to="about">About</SidebarLink>
             <SidebarLink to="discover">Discover</SidebarLink>
             <SidebarLink to="services">Services</SidebarLink>
            </SidebarMenu>
            <SideBtnWrapper>
             <SidebarRoute to="/contact">Contact Us</SidebarRoute>
            </SideBtnWrapper>
          </SidebarWrapper>
         </SidebarContainer>
        </>
    )
}

export default SideBar;