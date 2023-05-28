import React, { useState } from 'react';
import './style.scss';

export const LoginRightsSection = () => {
  const [heartActive, setHeartActive] = useState(true);

  return (
    <div className="login-form-footer">
      <div className="bottom-footer clearfix m-t10 m-b20 row text-center">
        <div className="col-lg-12 text-center">
          <span>
            {' '}
            © 2023 Key. All Rights Reserved | Design by{' '}
            <span
              className={`heart ${heartActive ? '' : 'heart-blast'}`}
              onClick={() => setHeartActive(!heartActive)}></span>
            <a href="frontend/package/src/pages/MainPages/Login/Login" target="_blank">
              {' '}
              CryptoApp{' '}
            </a>{' '}
          </span>
        </div>
      </div>
    </div>
  );
};
