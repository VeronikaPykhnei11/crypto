import React from 'react';
import { LinkItem } from '../LinkItem/LinkItem';
import { LinksListProps } from './types';

export const LinksList: React.FC<LinksListProps> = ({ linksList }) => {
  return (
    <ul>
      {linksList.map(({ toHref, linkTitle }) => (
        <LinkItem toHref={toHref} linkTitle={linkTitle} />
      ))}
    </ul>
  );
};
