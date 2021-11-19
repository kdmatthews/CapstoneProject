import styled, { keyframes } from 'styled-components';
import {bounce, fadeInLeft, lightSpeedIn} from 'react-animations'


export const FeaturedContain = styled.div`
display: flex;
width: 100%;
align-items: baseline;
flex-wrap: wrap;
justify-content: center;

`
const Animation = keyframes`${fadeInLeft}`
export const FeaturedInfoContain = styled.div`
animation: 2s ${Animation};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* border: double #6C8255; */
height:35rem;
width: 350px;
padding: 15px;
border-radius:10px;
/* border: double #FFE0AE; */
/* background-color: #FFE0AE; */

`
export const FeaturedConImg = styled.img`
height: 16rem;
width: 22rem;
border-radius: 10px;
`