import React from 'react';
import { navbarData } from './NavbarData';
import NavbarLinks from './NavbarLinks';
import { Header, NavbarIcons } from '../styled-components/NavbarStyled';

export default function Navbar() {

    return (
        <Header>
            <NavbarIcons>
          {navbarData?.map((linkData)=>(
              <NavbarLinks linkData={linkData} />
          ))}  
          </NavbarIcons>
        </Header>
    )
}
