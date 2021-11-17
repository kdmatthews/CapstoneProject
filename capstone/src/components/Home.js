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
      
        
       <TitleDiv>
       <Logo_Img src="https://images.unsplash.com/photo-1559592036-0052501e60f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3595&q=80"/>
       <Logo_Img src= {logo} alt = "sos logo"/>
       <Logo_Img src="https://images.unsplash.com/photo-1559592036-0052501e60f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3595&q=80"/>
       </TitleDiv>
       
        <FeaturedContainer />
        <CampaignContainer />
        </HomeDiv>
    )
}
