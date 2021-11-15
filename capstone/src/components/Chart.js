import React from "react";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";

export default function Chart(props) {
  const donations = props.campaign?.donations;
  const goal = props.campaign?.goal;

  const data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: donations,
      title: { text: "Campaign Progress" },
      type: "indicator",
      mode: "number+gauge+delta",
      delta: {
        reference: goal,
      },
      gauge: {
        shape: "bullet",
        axis: {
          range: [0, goal],
        },
      },
    },
  ];

  const layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };

  return (
    <div>
      <Plot data={data} layout={layout} />
    </div>
  );
}
