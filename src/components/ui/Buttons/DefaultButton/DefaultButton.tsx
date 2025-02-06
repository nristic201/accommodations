import React from 'react';

type DefaultButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const DefaultButton: React.FC<DefaultButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};
