import { bounceInDown } from "react-animations";
import styled, {keyframes} from "styled-components";

export const FormContain = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px;
`
const FormBounce = keyframes `${bounceInDown}`
export const FormDiv = styled.div`
animation: 2s ${FormBounce};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-image: linear-gradient(to right,  #FFA303 ,#FF4500 );
height: 325px;
width: 25rem;
border-radius: 7px;
`

export const Input = styled.input`
width: 50%;
height: 30px;
margin: .3rem;
border-radius: 6px;
`

export const FormButton = styled.button`
width: 30%;
height: 45px;
margin: .3rem;
background-color: #6C8255;
color: whitesmoke;
border: none;
border-radius: 4px;
font-size: 1.9rem;
`
export const SocialIcons = styled.a`
color: #6C8255;
justify-content: space-between;
font-size: 2rem;
height: 80px;
`
export const FormTitle = styled.h1`
color: whitesmoke;


`
export const HrefTag = styled.a`
font-size: 2rem;
color: whitesmoke;
`