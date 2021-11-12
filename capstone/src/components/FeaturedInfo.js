import React from 'react'

export default function FeaturedInfo(props) {
    const { item } = props;
  
    return (
        <div>
            <img src={item?.image} alt="" />
            <h1>{item?.title}</h1>
            <h2>{item?.Goal}</h2>
            <h3>Description: {item?.Description}</h3>
            <h3>Organizer: {item?.Organizer}</h3>
        </div>
    )
}
