import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    background-color: #6C8255;
    position: fixed;
    top: 0;
    z-index: 2;
    overflow: visible;
    border-top:double whitesmoke;
    border-bottom: double whitesmoke;
`
export const NavbarIcons = styled(Link)`

justify-content: center;
font-size: 2rem;
height: 80px;

color: #FFA303;
`
const HrefTag = styled.a`
font-size: 2rem;
color: #6C8255;
`
export const LinkDataDiv = styled.div`




`