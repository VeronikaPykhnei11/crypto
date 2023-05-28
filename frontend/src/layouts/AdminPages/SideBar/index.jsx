import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Collapse from 'react-bootstrap/Collapse';
import { MenuList } from './constants';
import './styled.scss';
import { SideBarHeader } from './SideBarHeader/SideBarHeader';
import { setActivePageTitle } from '../../../redux/actions/actions';
import { SideBarItem } from './SideBarItem/SideBarItem';
import { SideBarSubItem } from './SideBarSubItem/SideBarSubItem';
import { isSideBarOpenSelector } from '../../../redux/selectors/SideBarSelectors';

export const SideBar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(isSideBarOpenSelector);

  return (
    <div className={`sideBarWrapper ${isSideBarOpen ? '' : 'isClosed'}`}>
      <SideBarHeader />
      <div>
        <ul className="metismenu" id="menu">
          {MenuList.map((data, index) => {
            let menuClass = data.classsChange;
            return (
              <>
                <SideBarItem
                  activeTab={activeTab}
                  title={data.title}
                  onClickHandler={() => {
                    activeTab === data.title ? setActiveTab('') : setActiveTab(data.title);
                    if (!data.content) dispatch(setActivePageTitle(data.title));
                  }}
                  toHref={data.toHref}
                  icon={data.iconStyle}
                  hasContent={!!data.content}
                  isSideBarOpen={isSideBarOpen}
                />
                <li>
                  <Collapse in={activeTab === data.title}>
                    <ul className={`${menuClass === 'mm-collapse' ? 'mm-show' : ''}`}>
                      {data.content &&
                        data.content.map((data, index) => {
                          return (
                            <SideBarSubItem
                              onClickHandler={() => dispatch(setActivePageTitle(data.title))}
                              toHref={data.to}
                              title={data.title}
                              isSideBarOpen={isSideBarOpen}
                            />
                          );
                        })}
                    </ul>
                  </Collapse>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
