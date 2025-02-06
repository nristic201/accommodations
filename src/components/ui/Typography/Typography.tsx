import React from 'react';
import './Typography.styles.scss';
import classNames from 'classnames';

interface TypographyProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  text?: string;
  className?: string;
}
export const Typography: React.FC<TypographyProps> = ({ as: Element = 'p', className, text }) => {
  const styles = classNames(['acc-typography', `acc-typography-${Element}`], className);
  return <Element className={styles}>{text}</Element>;
};
