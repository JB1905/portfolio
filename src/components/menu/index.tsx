import React from 'react';
import { useTranslation } from 'react-i18next';
import sTrimmer from 's-trimmer';

import Icons from '../icons';
import { MenuSwitch } from '../switch';
import DesktopMenu from './desktop';
import MobileMenu from './mobile';

import { useMenu } from '../../hooks/useMenu';

import './menu.scss';

const Menu: React.FC = () => {
  const { toggleMenu, closeMenu, isMobile, isOpen } = useMenu();

  const { t } = useTranslation();

  // const menuItems = useMemo(
  //   () => t('menu', { returnObjects: true }) as any[],
  //   []
  // ); // TODO

  const menuItems = t<any[]>('menu', { returnObjects: true });

  // const menuItems = []

  return (
    <>
      <header>
        <Icons />

        <nav className="nav">
          <DesktopMenu
            className={`${isMobile ? 'hidden' : ''}`}
            menuItems={menuItems}
          />

          {isMobile && <MenuSwitch onClick={toggleMenu} />}
        </nav>
      </header>

      <MobileMenu
        className={sTrimmer(
          `${isMobile ? '' : 'hidden'} ${isOpen ? 'opened' : ''}`
        )}
        menuItems={menuItems}
        toggleMenu={closeMenu}
      />
    </>
  );
};

export default Menu;
