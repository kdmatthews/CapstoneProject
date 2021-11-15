import React from 'react';
import { useSelector } from 'react-redux';
import FeaturedInfo from './FeaturedInfo';
import { FeaturedContain } from '../styled-components/FeaturedStyled';

export default function FeaturedContainer() {
    const featuredInfo = useSelector((state)=>state.Featured);
    return (
        <FeaturedContain>
            {featuredInfo?.map((item)=> (
                <FeaturedInfo item={item} />
            ))};
        </FeaturedContain>
    )
}
