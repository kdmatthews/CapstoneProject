import styled, { keyframes } from 'styled-components';
import {  lightSpeedIn, bounceInRight} from 'react-animations';

export const CampCon = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 8rem;
margin: 10rem;
background-image: linear-gradient(to right,  #FFA303 ,#FF4500 );
padding: 10rem;
border-radius: 10cm;
`
export const CampaignsDiv = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
height: 30rem;
width: 20rem;
/* background-color: #FF4500 ; */
`


const speedAnimation = keyframes `${lightSpeedIn}`
export const CampImg = styled.img`
animation: 3s ${speedAnimation};
border-radius: 6px;
margin:2;
height:25rem;
width: 20rem;
`
const buttonAnimation = keyframes `${bounceInRight}`
export const DonateButton = styled.button`
animation: 10s ${buttonAnimation};
width: 10rem;
color: whitesmoke;
background-color: #6C8255;
border-radius:5px;
`


export const DonationInput = styled.input`
width:10rem ;


`



