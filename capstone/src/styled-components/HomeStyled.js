import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin: 3px;
`
export const TitleDiv =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
color: #FF4500 ;
margin-top:5rem;
`
export const Logo_Img = styled.img`
height: 20rem;
width: 20rem;
border-radius: 5px;
-webkit-animation: fadein 4s;
@keyframes fadein {
    from {opacity: 0;}
    to { opacity: 1; }
}

    `


