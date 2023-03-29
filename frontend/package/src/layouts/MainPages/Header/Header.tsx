import React, { useEffect, useState } from 'react';
import './style.css';
import { NavBarLinksList } from '../../../components/Header/NavBar/NavBarLinksList/NavBarLinksList';
import { SocialMediaLinksList } from '../../../components/common/SocialMediaList/SocialMediaLinksList/SocialMediaLinksList';
import { Logo } from '../../../components/Header/Logo/Logo';
import { HeaderButton } from '../../../components/Header/HeaderButton/HeaderButton';
import {
  logoList,
  headerButtonsList,
  logoDropDownNavBar,
  socialMediaLinks,
  linksList
} from './constants';

export const Header = () => {
  /* for sticky header */
  const [headerFix, setheaderFix] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <header className="site-header mo-left header header-transparent style-1">
        <div className={`sticky-header navbar-expand-lg ${headerFix ? 'is-fixed' : ''}`}>
          <div className="main-bar clearfix">
            <div className="container clearfix">
              <div className="logo-header">
                <Logo logoList={logoList} />
              </div>
              <button
                type="button"
                className={`navbar-toggler  navicon justify-content-end ${
                  sidebarOpen ? 'open' : 'collapsed'
                }`}
                onClick={() => setSidebarOpen(!sidebarOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="extra-nav">
                <div className="extra-cell">
                  <HeaderButton buttonsList={headerButtonsList} />
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  sidebarOpen ? 'show' : ''
                }`}
                id="navbarNavDropdown">
                <div className="logo-header mostion">
                  <Logo logoList={logoDropDownNavBar} />
                </div>
                <NavBarLinksList linksList={linksList} />
                <div className="header-bottom">
                  <SocialMediaLinksList
                    socialMediaLinks={socialMediaLinks}
                    wrapperClassName={'dz-social-icon'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
