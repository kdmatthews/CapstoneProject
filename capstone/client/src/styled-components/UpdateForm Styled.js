import { bounceInRight } from "react-animations";
import styled, {keyframes} from "styled-components";


const FormBounce = keyframes `${bounceInRight}`
export const UpdateDiv = styled.div`
animation: 2s ${FormBounce};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1rem;
padding: .5rem;
background-image: linear-gradient(to right,  #FFE0AE ,#FFA303 );
height: 30rem;
width: 40rem;
border-radius: 7px;
`

export const UpdateInput = styled.input`
width: 50%;
height: 30px;
margin: .3rem;
border-radius: 6px;
`

export const UpdateText = styled.textarea`
position:static;
width: 20vw;
`
