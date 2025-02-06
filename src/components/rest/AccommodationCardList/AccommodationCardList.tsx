import React from 'react';
import { Accommodation } from '../../../models/Accommodation';
import { AccommodationCard } from '../AccommodationCard/AccommodationCard';

import './AccommodationCardList.styles.scss';

interface AccommodationCardListProps {
  accommodations: Accommodation[];
}

export const AccommodationCardList: React.FC<AccommodationCardListProps> = (props) => {
  const { accommodations } = props;
  return (
    <div className="accommodation-card-list">
      {accommodations.map((item) => (
        <AccommodationCard {...item} />
      ))}
    </div>
  );
};
