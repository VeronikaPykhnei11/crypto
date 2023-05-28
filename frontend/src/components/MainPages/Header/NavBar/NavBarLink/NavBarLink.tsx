import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBarLinkProps } from './types';

export const NavBarLink: React.FC<NavBarLinkProps> = ({ toHref, linkTitle }) => {
  return (
    <li>
      <NavLink to={toHref}>{linkTitle}</NavLink>
    </li>
  );
};
