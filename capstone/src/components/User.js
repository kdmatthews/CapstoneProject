import React from 'react';
import {useState, useEffect, useRef} from 'react';

export default function User(props) {
    const delete_id = useRef(0);
    const { campaign } = props;
    const [campaignId, setCampaignId] = useState(0);
   
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
   
    // USEEFFECT
    // useEffect(()=> {
    //         deleteCampaign();  
    //     }, []);
       
    //     const deleteCampaign = async () => {
          
           
    //         const deleteCampaign1 = await fetch (`http://delete_campaign/id`, {
    //             method: "DELETE",
    //             mode: "cors",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         });
    //         const getCampaigns = await deleteCampaign.json();
    //         const id = setCampaignId(getCampaigns.rows.id);
    //         console.log("use effect was fired")
    //         console.log(campaignId)
          
    //     };

    // NOT USE EFFECT
   
      const reload = ()=> {

      }
   
    return (
        <div>
            <h1>User</h1>
            <h1>{campaign?.title}</h1>
            <img src={campaign?.image} alt="" />
            <h3>${campaign?.goal}</h3>
            <p>{campaign?.description}</p>
            <p>{campaign?.campaign_id}</p>
            <button>Update</button>
            <input type="number"  name="id" ref={delete_id}/>
            <button onClick={(e) => deleteCampaign(e)}>Delete</button>

        </div>
    )
}
