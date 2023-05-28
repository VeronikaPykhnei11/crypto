import React from 'react';
import { NavBarLink } from '../NavBarLink/NavBarLink';
import { NavBarLinksListProps } from './types';

export const NavBarLinksList: React.FC<NavBarLinksListProps> = ({ linksList }) => {
  return (
    <ul className="nav navbar-nav navbar">
      {linksList.map(({ toHref, linkTitle }) => (
        <NavBarLink toHref={toHref} linkTitle={linkTitle} />
      ))}
    </ul>
  );
};
