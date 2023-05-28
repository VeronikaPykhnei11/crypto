import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderButtonProps } from './types';

export const HeaderButton: React.FC<HeaderButtonProps> = ({ buttonsList }) => {
  return (
    <>
      {buttonsList.map(({ toHref, className, text }) => {
        return (
          <Link to={toHref} className={className}>
            {text}
          </Link>
        );
      })}
    </>
  );
};

//Single-Responsibility
