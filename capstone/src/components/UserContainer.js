import React from "react";

import User from "./User";
import {ChartDiv} from '../styled-components/AddCampaignStyled'
import { useEffect, useState } from "react";
import Chart from "./Chart";

export default function CampaignContainer() {
  const [campaignInfo, setCampaignInfo] = useState([]);
  const [viewUpdateForm, setViewUpdateForm] = useState(true);

  useEffect(() => {
    readCampaigns();
    // return () => {};
  }, []);

  const readCampaigns = async () => {
    const token = localStorage.getItem("jsonwebtoken");
    const readCampaigns = await fetch(
      "http://localhost:3000/read_campaigns_by_user/:creator_name",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const getCampaigns = await readCampaigns.json();
    setCampaignInfo(getCampaigns.rows);
  };

  return (
    <ChartDiv>
      {campaignInfo?.map((campaign) => (
        <User
          campaign={campaign}
          viewUpdateForm={viewUpdateForm}
          setViewUpdateForm={setViewUpdateForm}
        />
      ))}
      {campaignInfo.map((campaign) => (
        <Chart campaign={campaign} />
      ))}
    </ChartDiv>
  );
}
