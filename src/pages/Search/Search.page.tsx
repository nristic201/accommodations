import React from 'react';
import './Search.page.styles.scss';
import { PageLayout, Typography } from '../../components';
import mockDataService from '../../services/mockData.service';
import { AccommodationCardList } from '../../components/rest/AccommodationCardList/AccommodationCardList';

const AccommodationFilters = () => {
  return (
    <div className="acc-accommodation-filters">
      <div className="filters-box filter-listening">
        <Typography as="h4" text="Please find me some hotel stays in Riyaah..." />
        <Typography as="p" text="Listening..." />
      </div>
      <div className="filters-box filters-person"></div>
    </div>
  );
};

export const SearchPage = () => {
  return (
    <PageLayout className="acc-search-page">
      <AccommodationFilters />
      <AccommodationCardList accommodations={mockDataService.accommodations} />
    </PageLayout>
  );
};
