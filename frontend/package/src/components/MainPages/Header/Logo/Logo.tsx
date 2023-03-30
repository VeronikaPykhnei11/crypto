import React from 'react';
import { LogoProps } from './types';
import { Link } from 'react-router-dom';

export const Logo: React.FC<LogoProps> = ({ logoList }) => {
  return (
    <div className="dz-social-icon">
      <ul>
        {logoList.map(({ toHref, className, imgSrc }) => (
          <Link to={toHref} className={className}>
            <img src={imgSrc} alt="Logo" />
          </Link>
        ))}
      </ul>
    </div>
  );
};
