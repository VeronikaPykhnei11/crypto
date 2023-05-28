import React from 'react';
import { Link } from 'react-router-dom';
import { BackgroundShape } from './BackgroundShape';

export const PageLayout = ({ pageTitle, desc = true }) => {
  return (
    <>
      <div className="dz-bnr-inr style-1 text-center">
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>{pageTitle}</h1>
            {desc !== false && (
              <p className="text">Check our analyse and visualization and start trading today!</p>
            )}
            <nav className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={'/'}>Home</Link>
                </li>
                <li className="breadcrumb-item active">{pageTitle}</li>
              </ul>
            </nav>
          </div>
        </div>
        <BackgroundShape />
      </div>
    </>
  );
};
