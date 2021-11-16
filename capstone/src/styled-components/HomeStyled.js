import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";
import { lightSpeedIn } from 'react-animations';

export const HomeDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin: 3px;
`

const speedAnimation = keyframes `${lightSpeedIn}`
export const TitleDiv =styled.div`
animation: 2s ${speedAnimation};
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
 `

 const speedIn = keyframes `${lightSpeedIn}`
 



