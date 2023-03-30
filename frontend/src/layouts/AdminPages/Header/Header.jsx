import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageState } from '../../../redux/store';
import gridIcon from '../../../assets/images/icons/grid-3-x-3-gaps.svg';
import arrowRightIcon from '../../../assets/images/icons/arrow-right.svg';
import './styled.scss';
import { activePageTitle } from '../../../redux/selectors/ActivePageSelector';
import { isSideBarOpenSelector } from '../../../redux/selectors/SideBarSelectors';
import { toggleSideBar } from '../../../redux/actions/actions';

export const Header = () => {
  const pageTitle = useSelector(activePageTitle);
  const isSideBarOpen = useSelector(isSideBarOpenSelector);
  const dispatch = useDispatch();
  const [headerFix, setheaderFix] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);

  return (
    <div className={'row'}>
      <div className={'col-xl-12 admin-header-wrapper'}>
        <div className={`header-title-wrapper ${headerFix ? 'is-admin-header-fixed' : ''}`}>
          <img
            src={isSideBarOpen ? gridIcon : arrowRightIcon}
            className={'header-icon'}
            onClick={() => dispatch(toggleSideBar(!isSideBarOpen))}
          />
          {pageTitle}
        </div>
      </div>
    </div>
  );
};
