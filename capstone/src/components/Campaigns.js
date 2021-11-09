import React from "react";

export default function Campaigns(props) {
  const { campaign } = props;
  return (
    <div>
      <h1>{campaign?.title}</h1>
      <img src={campaign?.image} alt="" />
      <h3>{campaign?.goal}</h3>
      <p>{campaign?.description}</p>
    </div>
  );
}
