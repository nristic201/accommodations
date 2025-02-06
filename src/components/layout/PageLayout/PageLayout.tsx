import classNames from 'classnames';
import React from 'react';
import { Header } from '../..';

import './PageLayout.styles.scss';

interface PageLayoutProps extends React.PropsWithChildren {
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = (props) => {
  const classes = classNames('acc-page', props.className);
  return (
    <div className={classes}>
      <Header />
      <div className="acc-page__content">{props.children}</div>
    </div>
  );
};
