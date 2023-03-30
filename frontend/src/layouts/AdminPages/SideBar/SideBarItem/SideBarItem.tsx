import React from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import caretRight from '../../../../assets/images/icons/caret-right.svg';
import caretDown from '../../../../assets/images/icons/caret-down.svg';
import { SideBarItemProps } from './types';
import './styled.scss';

export const SideBarItem: React.FC<SideBarItemProps> = ({
  activeTab,
  title,
  onClickHandler,
  toHref,
  icon,
  hasContent,
  isSideBarOpen
}) => {
  return (
    <li
      className={` ${
        activeTab === title ? 'list-first-item mm-active-first-item' : 'list-first-item'
      }`}
      onClick={onClickHandler}>
      <NavLink
        to={toHref || '#'}
        className={` ${
          activeTab === title
            ? 'list-first-item-link sidebar__listItem mm-active-first-item'
            : ' sidebar__listItem list-first-item-link'
        }`}>
        <div>
          <img src={icon} className={'item-icon'} />
          <CSSTransition in={isSideBarOpen} timeout={0} classNames={'fade'} unmountOnExit>
            <span className="nav-text">{title}</span>
          </CSSTransition>
        </div>
        <CSSTransition in={isSideBarOpen} timeout={0} classNames={'fade'} unmountOnExit>
          <>{hasContent && <img src={activeTab === title ? caretRight : caretDown} />}</>
        </CSSTransition>
      </NavLink>
    </li>
  );
};
