import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { dispatchDonation } from "../reducers/actions/DonationActions";
import { useState } from "react";
import { CampaignsDiv, CampImg, DonateButton, DonationInput } from "../styled-components/CampaignContanStyled"

export default function Campaigns(props) {
  
  const [donationAmount, setDonationAmount] = useState(0)
  const dispatch = useDispatch()
  const { campaign } = props;
  const money = useSelector((state) => state.donationData.donations)
  
  const updateDonations = async (e) => {
    dispatchDonation(dispatch, donationAmount)
    const id = e.target.id
    const uppydate = await fetch(`/update_donations/${id}`,{
      method: "POST",
      mode: "cors",
      headers: {
          'Content-Type': 'application/json'
      },
      credentials: "same-origin",
      body: JSON.stringify({donations: donationAmount})
  }); window.location.reload(false)
  };
 

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: "USD",
});
let goalToggle = true
if (campaign?.goal > campaign?.donations) {
goalToggle = true
}
else {
  goalToggle = false
}
  return (
  
    <>
    <CampaignsDiv>
      <h1>{campaign?.title}</h1>
      <CampImg src={campaign?.image} alt="" />
      {goalToggle ? <>
      <h3>Goal {formatter.format(campaign?.goal)}</h3>
      <p>Amount donated {formatter.format(campaign?.donations)}</p> </> : <h3>Goal Met!</h3>}
      <p>{campaign?.description}</p>
      <DonationInput type="number" placeholder="Donation Amount" id="donationAmount" onChange={(e) => setDonationAmount(parseInt(e.target.value))}></DonationInput>
      <DonateButton id={campaign?.campaign_id} onClick={(e) => updateDonations(e)}>Donate Now!</DonateButton>
    </CampaignsDiv>
    </>
  );
}
