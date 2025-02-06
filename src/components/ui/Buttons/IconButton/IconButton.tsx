import React from 'react';
import './IconButton.styles.scss';
import classNames from 'classnames';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
};

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, className, ...rest } = props;
  const classes = classNames(['acc-icon-button', className]);
  return (
    <button className={classes} {...rest}>
      {icon}
    </button>
  );
};
