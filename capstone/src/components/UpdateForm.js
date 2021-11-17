import React from 'react';
import { useState, useRef } from 'react';
import { AddCamButton } from '../styled-components/AddCampaignStyled';
import { UpdateDiv, UpdateInput, UpdateText } from '../styled-components/UpdateForm Styled';

export default function UpdateForm(props) {
    const viewUpdateForm = props.viewUpdateForm;
    const campaign = props.campaign;
    const [campaignData, setCampaignData] = useState({creator_name: "", title: "", image: "", goal: "", description: ""});
    const update_id = useRef(0);
   

    const updateCampaign = async (e) => {
        e.preventDefault();
        const id = e.target.id;
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
            <UpdateDiv>
            
             {/* <input onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="creator_name"   type="text" placeholder="creator_name"/> */}
             <UpdateInput onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="image"  type="text" placeholder="image URL"/>
            <UpdateInput onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="title"  type="text" placeholder="Title"/>
         
            <UpdateInput onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="goal" type="number" placeholder="goal" />
           
            <UpdateText onChange={(e)=>setCampaignData({...campaignData,[e.target.name]:e.target.value})} name="description" id="" cols="30" rows="10" placeholder="description"></UpdateText> 
            <AddCamButton id={campaign?.campaign_id} onClick={(e)=>updateCampaign(e)}>Update Campaign</AddCamButton>
            </UpdateDiv>
            : <>
            </>
            
        }
          
        </>
    )
}
