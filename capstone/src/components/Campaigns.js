import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { dispatchDonation } from "../reducers/actions/DonationActions";
import { useState } from "react";
import { CampaignsDiv, CampImg, DonateButton, DonationInput } from "../styled-components/CampaignContanStyled"

export default function Campaigns(props) {
  const [donationAmount, setDonationAmount] = useState(0)
  const dispatch = useDispatch()
  const { campaign } = props;
  const money = useSelector((state) => state.donationData)
  console.log(money)
  const updateDonations = async (e) => {
    dispatchDonation(dispatch, donationAmount)
    const id = e.target.id
    const uppydate = await fetch(`http://localhost:3000/update_donations/${id}`,{
      method: "POST",
      mode: "cors",
      headers: {
          'Content-Type': 'application/json'
      },
      credentials: "same-origin",
      body: JSON.stringify({donations: donationAmount}),
  })
  };
 

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: "USD",
});
  return (
  
    <>
    <CampaignsDiv>
      <h1>{campaign?.title}</h1>
      <CampImg src={campaign?.image} alt="" />
      <h3>{formatter.format(campaign?.goal)}</h3>
      <p>{campaign?.description}</p>
      <p>{formatter.format(campaign?.donations)}</p>
      <DonationInput type="number" placeholder="Donation Amount" id="donationAmount" onChange={(e) => setDonationAmount(parseInt(e.target.value))}></DonationInput>
      <DonateButton id={campaign?.campaign_id} onClick={(e) => updateDonations(e)}>Donate Now!</DonateButton>
    </CampaignsDiv>
    </>
  );
}
