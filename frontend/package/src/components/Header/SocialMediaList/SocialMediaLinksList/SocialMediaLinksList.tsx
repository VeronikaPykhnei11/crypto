import React from 'react';
import { SocialMediaLink } from '../SocialMediaLink/SocialMediaLink';
import { SocialMediaLinksListProps } from './types';

export const SocialMediaLinksList: React.FC<SocialMediaLinksListProps> = ({ socialMediaLinks }) => {
  return (
    <div className="dz-social-icon">
      <ul>
        {socialMediaLinks.map(({ className, href }) => (
          <SocialMediaLink className={className} href={href} />
        ))}
      </ul>
    </div>
  );
};
