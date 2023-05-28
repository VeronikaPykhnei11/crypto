import React from 'react';
import error from '../../assets/images/error.png';

export const Error = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-7">
            <div className="form-input-content text-center error-page">
              <img src={error} />
              <h4>
                <i className="fa fa-times-circle text-danger" /> Woops!
              </h4>
              <p>Something went wrong!</p>
              <div>
                <p>Please, try again later!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
