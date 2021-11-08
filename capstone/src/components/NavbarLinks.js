import React from 'react';
import {Link} from "react-router-dom";


export default function NavbarLinks(props) {
    return (
        <>
         <Link to={props.linkData.path}>{props.linkData.name}</Link>   
        </>
    )
}
