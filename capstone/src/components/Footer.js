import React from 'react'
import { FooterDiv, FooterH4 } from '../styled-components/FooterStyled'
import * as AiIcons from "react-icons/ai";



export default function Footer() {
    return (
        <FooterDiv>
            <AiIcons.AiFillFacebook />
            <AiIcons.AiOutlineGoogle/>
            <AiIcons.AiOutlineTwitter/>
            <AiIcons.AiFillLinkedin/>
            <FooterH4>©S.O.S !</FooterH4> 
        </FooterDiv>
    )
}
