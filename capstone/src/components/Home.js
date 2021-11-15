import React from 'react';
import FeaturedContainer from './FeaturedContainer';
import CampaignContainer from './CampaignContainer';
import { HomeDiv, TitleDiv } from '../styled-components/HomeStyled';




export default function Home() {
   
  
    return (
        <HomeDiv>
        
       <TitleDiv>
       <h1>SOS</h1>
        <p>Help! I need somebody! Help! Not just anybody!</p>
       </TitleDiv>
        <FeaturedContainer />
        <CampaignContainer />
        </HomeDiv>
    )
}
