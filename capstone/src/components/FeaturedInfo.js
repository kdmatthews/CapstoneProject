import React from 'react'
import { FeaturedInfoContain, FeaturedConImg } from '../styled-components/FeaturedStyled';


export default function FeaturedInfo(props) {
    const { item } = props;
  
    return (
        <FeaturedInfoContain>
            <FeaturedConImg  src={item?.image} alt="" />
            <h1>{item?.title}</h1>


            <h2>{item?.Goal}</h2>
            <h3>Description: {item?.Description}</h3>

            <h3>Organizer: {item?.Organizer}</h3>
        </FeaturedInfoContain>
    )
}
