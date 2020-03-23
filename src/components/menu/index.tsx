import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Icons from '../icons';
import { MenuSwitch } from '../switch';
import DesktopMenu from './desktop';
import MobileMenu from './mobile';

import { useLanguages } from '../../hooks/useLanguages';
import { useMenu } from '../../hooks/useMenu';

import './menu.scss';

const Menu: React.FC = () => {
  const { language } = useLanguages();

  const { toggleMenu, closeMenu, isMobile, isOpen, ref } = useMenu();

  return (
    <StaticQuery
      query={graphql`
        {
          pl: languagesJson(lang: { eq: "pl" }) {
            menu {
              title
              link
            }
          }
          en: languagesJson(lang: { eq: "en" }) {
            menu {
              title
              link
            }
          }
        }
      `}
      render={(data) => (
        <>
          <header>
            <Icons />

            <nav className="nav" ref={ref}>
              <DesktopMenu
                className={`${isMobile ? 'hidden' : ''}`}
                content={data[language].menu}
              />

              {isMobile && <MenuSwitch onClick={toggleMenu} />}
            </nav>
          </header>

          <MobileMenu
            className={`${isMobile ? '' : 'hidden'} ${isOpen ? 'opened' : ''}`}
            content={data[language].menu}
            toggleMenu={closeMenu}
          />
        </>
      )}
    />
  );
};

export default Menu;
