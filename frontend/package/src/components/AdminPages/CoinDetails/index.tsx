import React from 'react';
import { Tab, Nav, Dropdown } from 'react-bootstrap';
import './styled.scss';
import { Link } from 'react-router-dom';
import { CoinCandleChartTable } from './CoinCandleChartTable/CoinCandleChartTable';

const DropdownBlog = () => {
  return (
    <>
      <Dropdown className="custom-dropdown mb-0 tbl-orders-style">
        <Dropdown.Toggle className="btn sharp tp-btn i-false" as="div">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.0335 13C12.5854 13 13.0328 12.5523 13.0328 12C13.0328 11.4477 12.5854 11 12.0335 11C11.4816 11 11.0342 11.4477 11.0342 12C11.0342 12.5523 11.4816 13 12.0335 13Z"
              stroke="#342E59"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0335 6C12.5854 6 13.0328 5.55228 13.0328 5C13.0328 4.44772 12.5854 4 12.0335 4C11.4816 4 11.0342 4.44772 11.0342 5C11.0342 5.55228 11.4816 6 12.0335 6Z"
              stroke="#342E59"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0335 20C12.5854 20 13.0328 19.5523 13.0328 19C13.0328 18.4477 12.5854 18 12.0335 18C11.4816 18 11.0342 18.4477 11.0342 19C11.0342 19.5523 11.4816 20 12.0335 20Z"
              stroke="#342E59"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu className=" dropdown-menu-end" align="end">
          <Dropdown.Item>Details</Dropdown.Item>
          <Dropdown.Item className="text-danger">Cancel</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export const CoinDetails = () => {
  return (
    <div className="row">
      <div className="col-xl-9 col-xxl-9">
        <CoinCandleChartTable />
      </div>
      <div className="col-xl-3 col-xxl-3 col-sm-6">
        <div className="card  digital-cash">
          <div className="card-header border-0">
            <h4 className="mb-0 heading">About</h4>
            <DropdownBlog />
          </div>
          <div className="card-body py-0">
            <div className="text-center">
              <div className="media d-block">
                <svg
                  width="126"
                  height="126"
                  viewBox="0 0 126 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M84.0001 49.8757C83.9965 45.5281 80.4721 42.0049 76.1257 42.0001H52.5001V57.7501H76.1257C80.4721 57.7465 83.9965 54.222 84.0001 49.8757Z"
                    fill="#FFAB2D"
                  />
                  <path
                    d="M52.5001 83.9999H76.1257C80.4745 83.9999 84.0001 80.4743 84.0001 76.1255C84.0001 71.7756 80.4745 68.2499 76.1257 68.2499H52.5001V83.9999Z"
                    fill="#FFAB2D"
                  />
                  <path
                    d="M63 0C28.2061 0 0 28.2061 0 63C0 97.7938 28.2061 126 63 126C97.7938 126 126 97.7938 126 63C125.96 28.2226 97.7774 0.0398255 63 0V0ZM94.5007 76.4995C94.4883 86.4367 86.4367 94.4883 76.5009 94.4993V98.9996C76.5009 101.485 74.4849 103.5 72.0006 103.5C69.5149 103.5 67.5003 101.485 67.5003 98.9996V94.4993H58.5011V98.9996C58.5011 101.485 56.4851 103.5 54.0008 103.5C51.5151 103.5 49.5005 101.485 49.5005 98.9996V94.4993H36.001C33.5153 94.4993 31.5007 92.4847 31.5007 90.0004C31.5007 87.5147 33.5153 85.5001 36.001 85.5001H40.4999V40.4999H36.001C33.5153 40.4999 31.5007 38.4853 31.5007 35.9996C31.5007 33.5139 33.5153 31.4993 36.001 31.4993H49.5005V27.0004C49.5005 24.5147 51.5151 22.5001 54.0008 22.5001C56.4865 22.5001 58.5011 24.5147 58.5011 27.0004V31.4993H67.5003V27.0004C67.5003 24.5147 69.5149 22.5001 72.0006 22.5001C74.4863 22.5001 76.5009 24.5147 76.5009 27.0004V31.4993C86.3996 31.4581 94.4581 39.448 94.5007 49.3467C94.5227 54.5886 92.2498 59.5777 88.2796 63C92.2128 66.3838 94.4828 71.3098 94.5007 76.4995V76.4995Z"
                    fill="#FFAB2D"
                  />
                </svg>
                <div className="media-content">
                  <h4 className="mt-0 mt-md-4 fs-20 font-w700 text-black mb-0">Digital Cash</h4>
                  <span className="font-w600 text-black">Bitcoin</span>
                  <span className="my-4 fs-16 font-w600 d-block">1 BITCOIN = 43,474.50 USD</span>
                  <p className="text-start">
                    Dash is an open source cryptocurrency. It is an altcoin that was forked from the
                    Bitcoin protocol. It is also a decentralized autonomous organization (DAO)...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer p-2 border-0">
            <Link to={'#'} className="btn btn-link text-primary">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
