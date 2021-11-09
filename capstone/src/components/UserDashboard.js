import React from 'react';
import CampaignContainer from './CampaignContainer';
import UserContainer from './UserContainer'
import AddCampaign from './AddCampaign';

export default function UserDashboard() {
    
    return (
        <div>
            <h1>User Dashboard</h1>
            <AddCampaign />
            <UserContainer />
        </div>
    )
}
