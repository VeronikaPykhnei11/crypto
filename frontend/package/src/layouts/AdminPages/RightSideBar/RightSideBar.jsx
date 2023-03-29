import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import mockIcon from '../../../assets/images/icons/pricing-lite-icon.svg';
import profilePicture from '../../../assets/images/profile-mock-picture.png';
import './styled.scss';

export const RightSideBar = () => {
  const [rightSelect, setRightSelect] = useState('Eng');
  return (
    <div>
      <div className="right-sidebar-wrapper">
        <div className="profile-icon-wrapper">
          <Dropdown className="me-2 mt-2">
            <Dropdown.Toggle as="div" className="i-false sidebar-select">
              <img src={profilePicture} width={50} className={'header-profile-icon'} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/app-profile" className="dropdown-item ai-icon">
                  <svg
                    id="icon-user1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary me-1"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  <span className="ms-2">Profile </span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/email-inbox" className="dropdown-item ai-icon">
                  <svg
                    id="icon-inbox"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-success me-1"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="ms-2">Inbox </span>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="language-picker-wrapper">
          <img src={mockIcon} alt="" className="mx-2" />
          <Dropdown className="language-dropdown-title me-2 mt-2">
            <Dropdown.Toggle as="div" className="i-false sidebar-select">
              {rightSelect} <i className="fa-solid fa-angle-down ms-2" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setRightSelect('Eng')}>Eng</Dropdown.Item>
              <Dropdown.Item onClick={() => setRightSelect('Af')}>Af</Dropdown.Item>
              <Dropdown.Item onClick={() => setRightSelect('Al')}>Al</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
