import React from 'react';
import {useState, useEffect, useRef} from 'react';
import UpdateForm from './UpdateForm';

export default function User(props) {
    const delete_id = useRef(0);
    const { campaign, viewUpdateForm, setViewUpdateForm } = props;

    
    const deleteCampaign = async (e) => {
        e.preventDefault();
        const id = delete_id.current.value;
        console.log(id)
    
        const deleteCampaigns = await fetch(`http://localhost:3000/delete_campaign/${id}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },         
        }); window.location.reload(false)
      };
   
   
    return (
        <div>
       
            <h1>{campaign?.title}</h1>
            <img src={campaign?.image} alt="" />
            <h3>goal: ${campaign?.goal}</h3>
            <p>description: {campaign?.description}</p>
            <p>id: {campaign?.campaign_id}</p>
            <p>creator: {campaign?.creator_name}</p>
            <button onClick={()=>setViewUpdateForm(!viewUpdateForm)}>{viewUpdateForm ? "Update" : "Cancel" }</button>
            <input type="number"  name="id" placeholder="campaign id" ref={delete_id}/>
            <button onClick={(e) => deleteCampaign(e)}>Delete</button>
            <UpdateForm viewUpdateForm={viewUpdateForm} />

        </div>
    )
}
