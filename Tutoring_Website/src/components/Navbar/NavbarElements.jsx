import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
    background: #FBE8A6;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const CodeSteps = styled.div`
    color: #303C6C;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-weight: bold;
    text-decoration: none;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 40px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
    color: #303C6C;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 3rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 10px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: #303C6C;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 90px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #303C6C;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1.5rem;
    height: 100%;
    font-weight: bold;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid red;
    }
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkRouter) `
    border-radius: 50px;
    background: #303C6C;
    white-space: nowrap;
    padding: 15px 22px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #3C4A85;    
        color: white;
    }
`;