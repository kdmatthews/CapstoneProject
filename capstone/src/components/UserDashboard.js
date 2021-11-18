import React from "react";
import UserContainer from "./UserContainer";
import AddCampaignUser from "./AddCampaignUser";


export default function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserContainer />
      <AddCampaignUser />
      
    </div>
  )
}
