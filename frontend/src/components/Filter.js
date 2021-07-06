import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
    const { robots } = useSelector((state) => state.data);

    const filterMaterial = () => {
      return [...new Set(robots.map(item => item.material))];
    }

    return (
        <div>
            
        </div>
    )
}
