import React from 'react'
import { FeaturedInfoContain, FeaturedConImg } from '../styled-components/FeaturedStyled';


export default function FeaturedInfo(props) {
    const { item } = props;
  
    return (
        <FeaturedInfoContain>
            <FeaturedConImg  src={item?.image} alt="" />
            <h1>{item?.title}</h1>


            <h2>{item?.Goal}</h2>
            <p>Description: {item?.Description}</p>

            <h3>Organizer: {item?.Organizer}</h3>
        </FeaturedInfoContain>
    )
}
