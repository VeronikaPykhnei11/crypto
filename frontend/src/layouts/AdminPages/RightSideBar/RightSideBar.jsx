import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import profileIcon from '../../../assets/images/icons/profile.svg';
import logoutIcon from '../../../assets/images/icons/logout.svg';
import './styled.scss';
import { activeUser } from '../../../redux/selectors/AuthSelectors';
import { authService } from '../../../services/AuthService';
import { setModalOpen } from '../../../redux/actions/confirmationModalActions';

export const RightSideBar = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector(activeUser);
  return (
      <div className="right-sidebar-wrapper">
        <div className="profile-icon-wrapper" onClick={() => {setProfileDropdownOpen(!profileDropdownOpen)}}>
          <div className="right-sidebar-profile-icon">
            {firstName[0] + lastName[0]}
          </div>
        </div>
        {
          profileDropdownOpen && (
            <div className={'right-side-bar-dropdown-menu'}>
              <div className={"right-side-bar-dropdown-menu-item right-side-bar-first-item"}>
                <img className={"profile-icon"} src={profileIcon}/>
                Profile
              </div>
              <div className={"right-side-bar-dropdown-menu-item right-side-bar-second-item"} onClick={() => {
                dispatch(setModalOpen(true));
                setProfileDropdownOpen(!profileDropdownOpen)
              }}>
                <img className={"logout-icon"} src={logoutIcon}/>
                Logout
              </div>
            </div>
          )
        }
      </div>
  );
};
