import React from 'react';
import { SocialMediaLink } from '../SocialMediaLink/SocialMediaLink';
import { SocialMediaLinksListProps } from './types';

export const SocialMediaLinksList: React.FC<SocialMediaLinksListProps> = ({
  socialMediaLinks,
  wrapperClassName
}) => {
  return (
    <div className={wrapperClassName}>
      <ul>
        {socialMediaLinks.map(({ className, href }) => (
          <SocialMediaLink className={className} href={href} />
        ))}
      </ul>
    </div>
  );
};
