import React from "react";

import UserContainer from "./UserContainer";

import AddCampaignUser from "./AddCampaignUser";
import Chart from "./Chart";

export default function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <AddCampaignUser />
      <UserContainer />
    </div>
  );
}
