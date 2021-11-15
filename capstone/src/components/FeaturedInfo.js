import React from 'react'
import { FeaturedInfoContain, FeaturedConImg } from '../styled-components/FeaturedStyled';


export default function FeaturedInfo(props) {
    const { item } = props;
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD",
    });
    return (
        <FeaturedInfoContain>
            <FeaturedConImg  src={item?.image} alt="" />
            <h1>{item?.title}</h1>
            <h2>{formatter.format(item?.Goal)}</h2>
            <p>Description: {item?.Description}</p>
            <h3>Organizer: {item?.Organizer}</h3>
        </FeaturedInfoContain>
    )
}
