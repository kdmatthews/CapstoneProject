import styled, { keyframes } from 'styled-components';
import {bounce} from 'react-animations'


export const FeaturedContain = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
align-items: center;
margin-top: 2rem ;
border-radius:10px;
/* border: solid black; */

`
const bounceAnimation = keyframes`${bounce}`
export const FeaturedInfoContain = styled.div`
animation: 2s ${bounceAnimation};
display: flex;
flex-direction: column;
align-items: center;
border: double #6C8255;
height:30rem;
border-radius:10px;
background-color: #FFA303;

`
export const FeaturedConImg = styled.img`
height: 20rem;
width: 20rem;
border-radius: 5px;
`