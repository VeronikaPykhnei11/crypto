import React from 'react';
import { NavLink } from 'react-router-dom';
import { SideBarSubItemProps } from './types';
import { CSSTransition } from 'react-transition-group';
import './styled.scss';

export const SideBarSubItem: React.FC<SideBarSubItemProps> = ({
  title,
  onClickHandler,
  toHref,
  isSideBarOpen
}) => {
  return (
    <li className={'sub-item-link'} onClick={onClickHandler}>
      <NavLink to={toHref} className={'sidebar__listItem'}>
        <CSSTransition in={isSideBarOpen} timeout={200} classNames={'fade'} unmountOnExit>
          <span>{title}</span>
        </CSSTransition>
      </NavLink>
    </li>
  );
};
