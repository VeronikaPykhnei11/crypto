import React from 'react';
import { SocialMediaLinkProps } from './types';

export const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ className, href }) => {
  return (
    <>
      <li>
        <a target="_blank" className={className} rel="noreferrer" href={href}></a>
      </li>{' '}
    </>
  );
};
