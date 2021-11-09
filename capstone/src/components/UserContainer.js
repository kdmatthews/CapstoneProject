import React from 'react';

import User from './User';

import { useEffect, useState } from 'react';

export default function CampaignContainer() {
    const [campaignInfo, setCampaignInfo] = useState([]);
    const [ viewUpdateForm, setViewUpdateForm ] = useState(true)
   
   

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
        
            setCampaignInfo(getCampaigns.rows)
            
          
        };
    
    return (
        <div>
          {campaignInfo?.map((campaign)=>(
              <User campaign={campaign} viewUpdateForm={viewUpdateForm} setViewUpdateForm={setViewUpdateForm}/>
          ))}
        </div>
        )
    }