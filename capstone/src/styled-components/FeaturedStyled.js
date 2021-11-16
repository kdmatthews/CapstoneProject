import styled, { keyframes } from 'styled-components';
import {bounce, fadeInLeft, lightSpeedIn} from 'react-animations'


export const FeaturedContain = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
align-items: center;
margin-top: 2rem ;
border-radius:10px;
/* border: solid black; */

`
const Animation = keyframes`${fadeInLeft}`
export const FeaturedInfoContain = styled.div`
animation: 2s ${Animation};
display: flex;
flex-direction: column;
align-items: center;
/* border: double #6C8255; */
height:30rem;
border-radius:10px;
background-color: #FFE0AE;

`
export const FeaturedConImg = styled.img`
height: 17rem;
width: 36rem;
border-radius: 5px;
`