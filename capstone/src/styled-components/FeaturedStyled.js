import styled, { keyframes } from 'styled-components';
import {bounce, fadeInLeft, lightSpeedIn} from 'react-animations'


export const FeaturedContain = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
align-items: center;
justify-content: space-evenly;
margin-top: 2rem ;
border-radius:10px;
background-color: #6C8255;
/* width: 100rem; */
/* border: solid black; */

`
const Animation = keyframes`${fadeInLeft}`
export const FeaturedInfoContain = styled.div`
animation: 2s ${Animation};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* border: double #6C8255; */
height:30rem;
width: 20rem;
border-radius:10px;
/* border: double #FFE0AE; */
/* background-color: #FFE0AE; */

`
export const FeaturedConImg = styled.img`
height: 10rem;
width: 16rem;
border-radius: 10px;
`