import React from "react";
import {useDispatch} from "react-redux"

export default function Campaigns(props) {
  const dispatch = useDispatch()
  const { campaign } = props;
  const updateDonations = () => {
    
  }
  return (
    <div>
      <h1>{campaign?.title}</h1>
      <img src={campaign?.image} alt="" />
      <h3>{campaign?.goal}</h3>
      <p>{campaign?.description}</p>
      <button id={campaign?.campaign_id} onClick={(e) => }> Donate Now!</button>
    </div>
  );
}
