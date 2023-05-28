import React from 'react';
import logo from '../../../../assets/images/logo-white.png';
import logoIcon from '../../../../assets/images/logo-white-icon.png';
import { Link } from 'react-router-dom';
import './styled.scss';
import { isSideBarOpenSelector } from '../../../../redux/selectors/SideBarSelectors';
import { useSelector } from 'react-redux';

export const SideBarHeader = () => {
  const isSideBarOpen = useSelector(isSideBarOpenSelector)
  return <Link to={'/'} className={'side-bar-logo-wrapper'}>
    {
      isSideBarOpen ? <img src={logo} alt="" className={"side-bar-header-logo"} /> : <img src={logoIcon} alt="" className={"side-bar-header-logo"} />
    }
  </Link>
};
