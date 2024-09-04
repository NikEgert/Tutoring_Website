import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkRouter} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #FBE8A6;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #303C6C;

    &:hover{
        transition: all 0.2s ease-in-out;   
        color: #3C4A85;
    }
`;

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: black;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    color: #303C6C;
    cursor: pointer;

    &:hover{
        transition: all 0.2s ease-in-out;   
        color: white;
    }
`;

export const SideBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #303C6C;
    white-space: nowrap;
    padding: 16px 64px;
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
