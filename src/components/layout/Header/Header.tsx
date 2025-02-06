import React from 'react';
import { IconButton } from '../../../components/ui';
import { MenuIcon, NotificationIcon } from '../../../assets';
import './Header.scss';
import { ProfileInfo } from '../../../components/rest';

export const Header = () => {
  return (
    <header className="acc-header">
      <IconButton icon={<MenuIcon />} />
      <ProfileInfo />
      <IconButton className="notification-icon-button" icon={<NotificationIcon />} />
    </header>
  );
};
