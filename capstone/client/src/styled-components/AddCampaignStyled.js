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
width: 20vw;


`

export const NewCamDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ChartDiv = styled.div`
display: flex;
flex-wrap: wrap;
width: 90%;
justify-content: center;
margin: auto;
margin-top: 50px;

`
export const AddCamButton = styled.button`
height: 2rem;
width: 8rem;
color: whitesmoke;
background-color: #6C8255 ;
`
export const formHeader = styled.style`
color: whitesmoke;
font-size: large;
`