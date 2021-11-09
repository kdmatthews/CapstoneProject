import React from 'react';
import { navbarData } from './NavbarData';
import NavbarLinks from './NavbarLinks';
import { Header } from '../styled-components/NavbarStyled';

export default function Navbar() {

    return (
        <Header>
            
          {navbarData?.map((linkData)=>(
              <NavbarLinks linkData={linkData} />
          ))}  
         
        </Header>
    )
}
