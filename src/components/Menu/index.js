import React, { useState, useEffect, useRef } from 'react';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBar from '../NavBar';
import Icons from '../Icons';
import DesktopMenu from './Desktop';
import MobileMenu from './Mobile';

import './Menu.scss';

import { content } from '../../content';

export default function Menu({ offset, update, height }) {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(
    () => {
      onResize();
      window.addEventListener('resize', () => onResize());

      return window.removeEventListener('resize', () => onResize());
    },
    [update, isOpen]
  );

  function onResize() {
    if (ref.current.offsetHeight > 74) {
      setIsMobile(true);

      if (isOpen) offset(true);
      else offset(false);
    } else {
      setIsMobile(false);
      offset(false);
    }
  }

  const toggleMenu = () => {
    setIsOpen(isMobile ? !isOpen : isOpen);
    offset(isMobile ? !isOpen : isOpen);
  };

  return (
    <NavBar>
      <Icons />

      <div className="nav" ref={ref}>
        <DesktopMenu
          className={`desktop ${isMobile ? 'hidden' : ''}`}
          content={content.menu}
        />

        {isMobile && (
          <div className="mobile">
            <Delay wait={200}>
              <button className="menu" onClick={toggleMenu}>
                <FontAwesomeIcon icon="bars" />
              </button>
            </Delay>

            {isOpen && (
              <MobileMenu
                height={height - 76}
                toggleMenu={toggleMenu}
                content={content.menu}
              />
            )}
          </div>
        )}
      </div>
    </NavBar>
  );
}
