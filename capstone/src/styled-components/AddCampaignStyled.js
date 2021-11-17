import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";


const FormBounce = keyframes `${bounceInDown}`
export const NewCampaignForm = styled.form`
animation: 2s ${FormBounce};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1rem;
padding: .5rem;
background-image: linear-gradient(to right,  #FFA303 ,#FF4500 );
height: 30rem;
width: 40rem;
border-radius: 7px;
`
export const CampaignInputs = styled.input`
width: 50%;
height: 30px;
margin: .3rem;
border-radius: 6px;
`
export const CampaignText = styled.textarea`
position:static;
width: 60vw;


`

export const NewCamDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ChartDiv = styled.div`
display: grid;
grid-template-columns: repeat(3, 0.5fr);
/* gap: 3rem; */
`
export const AddCamButton = styled.button`
height: 2rem;
width: 8rem;
color: whitesmoke;
background-color: #6C8255 ;
`
export const formHeader = styled.h2`
color: whitesmoke;
`