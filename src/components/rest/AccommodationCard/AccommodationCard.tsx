import React, { useMemo } from 'react';
import { Tag, Typography } from '../../ui';

import './AccommodationCard.styles.scss';
import { Accommodation, IAccommodationOptionsKeys } from '../../../models/Accommodation';
import mockDataService from '../../../services/mockData.service';

type AccommodationCardProps = Accommodation;

export const AccommodationCard: React.FC<AccommodationCardProps> = (props) => {
  const { name, price, distance, availability, options, isTopRecommentadion } = props;

  const mappedOptions = useMemo(() => {
    const keys = Object.keys(options) as unknown as IAccommodationOptionsKeys[];

    return keys.filter((key) => options[key]);
  }, [options]);

  return (
    <div className="acc-accommodation-card">
      <div className="acc-accommodation-card__body">
        <div className="acc-accommodation-card__banner">
          <img src="https://thekingsdaughtersinn.com/wp-content/uploads/2021/06/Untitled-design-3.png" />
          <Typography as="h3" text={name} />
        </div>
        <div>
          {isTopRecommentadion ? (
            <Typography as="h3" text="Top Recommendation" className="top-recommendation" />
          ) : undefined}
          <div className="tag-items">
            {mappedOptions.map((item) => (
              <Tag
                key={item}
                content={mockDataService.AccommodationOptionMapping[item]}
                icon={mockDataService.AccommodationOptionIconsMapping[item]}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="acc-accommodation-card__footer">
        <div className="acc-accommodation-card__footer__block">
          <Typography text="COST" as="p" />
          <Typography text={`$ ${price.value} CAD/night`} as="p" />
        </div>
        <div className="acc-accommodation-card__footer__block">
          <Typography text="MAPS" as="p" />
          <Typography as="p" text={`${distance} KM away`} />
        </div>
        <div className="acc-accommodation-card__footer__block">
          <Typography text="AVAILABLE" as="p" />
          <Typography text={`${availability} left`} as="p" />
        </div>
      </div>
    </div>
  );
};
