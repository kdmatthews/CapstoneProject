import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";

export const UserCamDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:.2rem;
background-image: url();
`
export const UserCampaignImg = styled.img`
height:20rem;
width: 30rem;
border-radius: 10px;
`

const buttonAnimation = keyframes `${bounceInDown}`
export const Up_DelButton = styled.button`
animation:2s ${buttonAnimation};
height: 2rem;
width: 8rem;
color: whitesmoke;
background-color: #6C8255 ;
`