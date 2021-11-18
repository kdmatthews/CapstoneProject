import styled, { keyframes } from 'styled-components'
import { flash } from 'react-animations';

export const HomeDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin: 3px;

@media only screen and (device-width: 1024px) and (device-height: 1366px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }`

const fadeAnimation = keyframes `${flash}`
export const TitleDiv =styled.div`
animation: 2s ${fadeAnimation};
display: flex;
flex-direction: row;
justify-content: center;
color: #FF4500 ;
gap:1rem;
margin-top:5rem;
`
export const Logo_Img = styled.img`
height: 20rem;
width: 20rem;
border-radius: 5px;
 `

 
 



