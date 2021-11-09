import React from 'react';
import { useState } from 'react';


export default function AddCampaign() {
    const [campaignData, setCampaignData] = useState({creator_name: "", title: "", image: "", goal: "", description: ""});
    

    const createCampaign = async (e) => {
        e.preventDefault();
    
        const createCampaign = await fetch ("http://localhost:3000/create_campaign", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(campaignData),
        });    window.location.reload(false)
     
    } 
    return (
        <div>
             <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="creator_name"   type="text" placeholder="creator_name"/>
             <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="image"  type="text" placeholder="image URL"/>
            <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="title"  type="text" placeholder="Title"/>
         
            <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="goal" type="number" placeholder="goal" />
            
            <textarea onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="description" id="" cols="30" rows="10" placeholder="description"></textarea>
            <button onClick={(e)=>createCampaign(e)}>Add Campaign</button>
          
           
        </div>
    )
}