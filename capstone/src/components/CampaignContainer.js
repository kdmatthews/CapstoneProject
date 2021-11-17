import React from "react";
import Campaigns from "./Campaigns";
import { useEffect, useState } from "react";
import { CampCon } from "../styled-components/CampaignContanStyled"

export default function CampaignContainer() {
  const [campaignInfo, setCampaignInfo] = useState([]);

  useEffect(() => {
    readCampaigns();
  }, []);

  const readCampaigns = async () => {
    const readCampaigns = await fetch("http://localhost:3000/read_campaigns", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const getCampaigns = await readCampaigns.json();
    setCampaignInfo(getCampaigns.rows);
  };

  return (
    <CampCon>
      {campaignInfo?.map((campaign) => (
        <Campaigns campaign={campaign} />
      ))}
    </CampCon>
  );
}
