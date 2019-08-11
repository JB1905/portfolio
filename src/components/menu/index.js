import React, { useState, useEffect, useContext, useRef } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Icons from 'components/icons';
import { MenuSwitch } from 'components/switch';
import { LanguageContext } from 'context';
import NavBar from './bar';
import DesktopMenu from './desktop';
import MobileMenu from './mobile';

import './menu.scss';

const Menu = ({ offset }) => {
  const ref = useRef();

  const { language } = useContext(LanguageContext);

  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const onResize = () => {
    if (ref.current.offsetHeight > 74) {
      setIsMobile(true);

      if (isOpen) offset(true);
      else offset(false);
    } else {
      setIsMobile(false);
      offset(false);
    }
  };

  useEffect(() => {
    onResize();

    window.addEventListener('resize', () => onResize());
    window.removeEventListener('resize', () => onResize());
  }, [isOpen, language]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    offset(!isOpen);
  };

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
      render={data => (
        <>
          <NavBar>
            <Icons />

            <div className="nav" ref={ref}>
              <DesktopMenu
                className={`desktop ${isMobile ? 'hidden' : ''}`}
                content={data[language].menu}
              />

              {isMobile && <MenuSwitch onClick={toggleMenu} />}
            </div>
          </NavBar>

          {isMobile && isOpen && (
            <MobileMenu
              height={window.innerHeight - 76}
              content={data[language].menu}
              toggleMenu={toggleMenu}
            />
          )}
        </>
      )}
    />
  );
};

Menu.propTypes = {
  offset: PropTypes.func.isRequired
};

export default Menu;
