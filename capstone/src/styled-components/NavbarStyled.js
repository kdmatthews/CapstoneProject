import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #6C8255;
    position: fixed;
    top: 0;
    z-index: 2;
`
export const NavbarIcons = styled(Link)`
justify-content: space-between;
font-size: 2rem;
height: 80px;

color: #FFA303;
`
