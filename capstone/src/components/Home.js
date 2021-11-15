import React from 'react';
import FeaturedContainer from './FeaturedContainer';
import CampaignContainer from './CampaignContainer';
import { HomeDiv, TitleDiv, Logo_Img,  } from '../styled-components/HomeStyled';
import logo from '.././assests/logo.png'
import Confetti from 'react-confetti';
import FadeIn from 'react-fade-in'





export default function Home() {
   
  
    return (
        <HomeDiv>
         <FadeIn>   
        <Confetti/>
        </FadeIn>
        <div></div>
       <TitleDiv>
       <Logo_Img src= {logo} alt = "sos logo"/>
       
       </TitleDiv>
       
        <FeaturedContainer />
        <CampaignContainer />
        </HomeDiv>
    )
}
