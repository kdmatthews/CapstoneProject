import React from 'react';
import { useSelector } from 'react-redux';
import FeaturedInfo from './FeaturedInfo';
export default function FeaturedContainer() {
    const featuredInfo = useSelector((state)=>state.Featured);
    return (
        <div>
            {featuredInfo?.map((item)=> (
                <FeaturedInfo item={item} />
            ))};
        </div>
    )
}
