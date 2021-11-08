import React from 'react';
import FeaturedContainer from './FeaturedContainer';
import AddCampaign from './AddCampaign';
import CampaignContainer from './CampaignContainer';

export default function Home() {
    return (
        <div>
        <h1>SOS</h1>
        <p>Help! I need somebody! Help! Not just anybody!</p>
        <AddCampaign />
        <FeaturedContainer />
        <CampaignContainer />
        </div>
    )
}
