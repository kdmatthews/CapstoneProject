import React from 'react';
import { useState, useRef } from 'react';

export default function UpdateForm(props) {
    const viewUpdateForm = props.viewUpdateForm
    const [campaignData, setCampaignData] = useState({creator_name: "", title: "", image: "", goal: "", description: ""});
    const update_id = useRef(0);
   

    const updateCampaign = async (e) => {
        e.preventDefault();
        const id = update_id.current.value;
        console.log(id);

        const updateCampaigns = await fetch (`http://localhost:3000/update_campaign/${id}`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(campaignData),
        });
        window.location.reload(false)
     
    } 
    return (
        <>
            {!viewUpdateForm ? 
            <div>
            
             {/* <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="creator_name"   type="text" placeholder="creator_name"/> */}
             <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="image"  type="text" placeholder="image URL"/>
            <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="title"  type="text" placeholder="Title"/>
         
            <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="goal" type="number" placeholder="goal" />
            <input type="number"  name="id" placeholder="id" ref={update_id}/>
            <textarea onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="description" id="" cols="30" rows="10" placeholder="description"></textarea> 
            <button onClick={(e)=>updateCampaign(e)}>Update Campaign</button>
            </div>
            : <></>
            
        }
          
        </>
    )
}
