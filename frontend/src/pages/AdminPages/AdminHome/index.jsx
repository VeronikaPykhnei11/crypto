import React from 'react';
import { SideBar } from '../../../layouts/AdminPages/SideBar';
import { Header } from '../../../layouts/AdminPages/Header/Header';
import './styled.scss';
import { RightSideBar } from '../../../layouts/AdminPages/RightSideBar/RightSideBar';
import { useSelector } from 'react-redux';
import { isSideBarOpenSelector } from '../../../redux/selectors/SideBarSelectors';

export const AdminHome = ({ children }) => {
  const isSideBarOpen = useSelector(isSideBarOpenSelector);
  return (
    <div className="row">
      <div className={`${isSideBarOpen ? 'col-xl-2' : 'col-xl-1'}`}>
        <SideBar />
      </div>
      <div className={`${isSideBarOpen ? 'col-xl-9' : 'col-xl-10'}`}>
        <Header />
        <div className={'content-wrapper'}>{children}</div>
      </div>
      <div className={'col-xl-1'}>
        <RightSideBar />
      </div>
    </div>
  );
};
