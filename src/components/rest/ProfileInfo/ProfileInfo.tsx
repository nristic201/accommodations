import React from 'react';
import { Avatar, Typography } from '../../../components';

import './ProfileInfo.styles.scss';

export const ProfileInfo = () => {
  const userData = {
    image:
      'https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_square.jpg?wp=1&w=357&h=357',
  name: 'Anthony',
  };
  return (
    <div className="acc-profile-info">
      <Avatar size="l" img={userData.image} rounded />
      <div>
        <Typography as="p" text="Hello," />
        <Typography as="h3" text={userData.name} />
      </div>
    </div>
  );
};
