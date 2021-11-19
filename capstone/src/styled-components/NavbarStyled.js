import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Header = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100vw;
    height: 70px;
    background-color:  #FFE0AE;
    top: 0;
    z-index: 2;
    overflow: visible;
    border-top:double whitesmoke;
    border-bottom: double whitesmoke;

    align-items: center;


`
export const NavbarIcons = styled(Link)`

justify-content: center;
font-size: 2rem;
height: 80px;

color: #6C8255;
`
const HrefTag = styled.a`
font-size: 2rem;
color: #6C8255;
`
export const LogOutButton = styled.button`
height: 2rem;
width: 8rem;
color: whitesmoke;
background-color: #6C8255 ;




`