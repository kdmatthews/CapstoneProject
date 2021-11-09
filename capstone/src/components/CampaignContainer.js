import React from 'react';
import Campaigns from './Campaigns';
import { useEffect, useState } from 'react';

export default function CampaignContainer() {
    const [campaignInfo, setCampaignInfo] = useState([]);
   

    useEffect(()=> {
       
  
            readCampaigns();
            // return () => {};
           
        }, []);
       
        const readCampaigns = async () => {
            const readCampaigns = await fetch ("http://localhost:3000/read_campaigns", {
                method: "GET",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const getCampaigns = await readCampaigns.json();
            console.log(getCampaigns)
            setCampaignInfo(getCampaigns.rows)
            console.log("use effect was fired")
            console.log(campaignInfo)
           
          
        };
    
    return (
        <div>
          {campaignInfo?.map((campaign)=>(
              <Campaigns campaign={campaign} />
          ))}
        </div>
    )
}
