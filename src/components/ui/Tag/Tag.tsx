import React from 'react';
import './Tag.styles.scss';

interface TagProps {
  content: string;
  icon?: React.ReactNode;
}
export const Tag: React.FC<TagProps> = (props) => {
  const { icon, content } = props;
  return (
    <div className="acc-tag">
      {icon}
      {content}
    </div>
  );
};
