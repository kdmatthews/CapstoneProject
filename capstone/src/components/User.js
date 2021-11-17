import React from 'react';
import { UserCamDiv, UserCampaignImg } from '../styled-components/UserStyled';
import UpdateForm from './UpdateForm';

export default function User(props) {
    const { campaign, viewUpdateForm, setViewUpdateForm } = props;

    
    const deleteCampaign = async (e) => {
     const id = e.target.id
        const deleteCampaigns = await fetch(`http://localhost:3000/delete_campaign/${id}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },  
               
        }); 
      
        window.location.reload(false)
       
       
      };  
    
      let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD",
    });
   
    return (
        <UserCamDiv>
       
            <h1>{campaign?.title}</h1>
            <UserCampaignImg src={campaign?.image} alt="" />
            <h3>goal: {formatter.format(campaign?.goal)}</h3>
            <p>description: {campaign?.description}</p>
            <p>creator: {campaign?.creator_name}</p>
            <button id={campaign?.campaign_id} onClick={()=>setViewUpdateForm(!viewUpdateForm)}>{viewUpdateForm ? "Update" : "Cancel" }</button>
            <button id={campaign?.campaign_id} onClick={(e) => deleteCampaign(e)}>Delete</button>
            <UpdateForm viewUpdateForm={viewUpdateForm} campaign={campaign}/>

        </UserCamDiv>
    )
}
