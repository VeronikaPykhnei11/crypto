import React from 'react';
import { Link } from 'react-router-dom';
import { LinkItemProps } from './types';

export const LinkItem: React.FC<LinkItemProps> = ({ toHref, linkTitle }) => {
  return (
    <li>
      <Link to={toHref}>{linkTitle}</Link>
    </li>
  );
};
