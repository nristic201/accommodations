import React, { useMemo } from 'react';
import { Typography } from '../Typography/Typography';
import classNames from 'classnames';
import './Avatar.styles.scss';

type AvatarProps = {
  size?: 's' | 'm' | 'l';
  noImageText?: string;
  img?: string;
  rounded?: boolean;
};

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { size = 'm', noImageText, img, rounded } = props;

  const content = useMemo(() => {
    if (img) {
      return <img alt="avatar" src={img} />;
    }
    return <Typography as="p" text={noImageText} />;
  }, [img, noImageText]);

  const classes = classNames(['acc-avatar', `acc-avatar--${size}`, { 'acc-avatar--rounded': rounded }]);

  return <div className={classes}>{content}</div>;
};
