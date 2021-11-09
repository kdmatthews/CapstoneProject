import React from 'react';
import { useState } from 'react';

export default function UpdateForm(props) {
    const viewUpdateForm = props.viewUpdateForm
    const [campaignData, setCampaignData] = useState([]);
    return (
        <>
            {!viewUpdateForm ? 
            <div>
             <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="creator_name"   type="text" placeholder="creator_name"/>
             <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="image"  type="text" placeholder="image URL"/>
            <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="title"  type="text" placeholder="Title"/>
         
            <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="goal" type="number" placeholder="goal" />
            
            <textarea onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="description" id="" cols="30" rows="10" placeholder="description"></textarea> 
            </div>
            : <></>
            
        }
          
        </>
    )
}
