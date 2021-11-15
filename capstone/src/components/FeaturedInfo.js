import React from 'react'
import { FeaturedContain } from '../styled-components/FeaturedStyled';

export default function FeaturedInfo(props) {
    const { item } = props;
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD",
    });
    return (
        <FeaturedContain>
            <img src={item?.image} alt="" />
            <h1>{item?.title}</h1>
            <h2>{formatter.format(item?.Goal)}</h2>
            <h3>Description: {item?.Description}</h3>
            <h3>Organizer: {item?.Organizer}</h3>
        </FeaturedContain>
    )
}
