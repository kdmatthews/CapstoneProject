import React from 'react';
import { navbarData } from './NavbarData';
import NavbarLinks from './NavbarLinks';

export default function Navbar() {

    return (
        <>
          {navbarData?.map((linkData)=>(
              <NavbarLinks linkData={linkData} />
          ))}  
        </>
    )
}
