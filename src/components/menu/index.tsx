import { useTranslation } from 'react-i18next';
import sTrimmer from 's-trimmer';

import Icons from '../icons';
import { MenuSwitch } from '../switch';
import DesktopMenu from './desktop';
import MobileMenu from './mobile';

import { useMenu } from '../../hooks/useMenu';

import { MenuItem } from '../../interfaces/MenuItem';

import './menu.scss';

const Menu = () => {
  const { toggleMenu, closeMenu, isMobile, isOpen } = useMenu();

  const { t } = useTranslation();

  //TODO
  const menuItems = t('menu', {
    returnObjects: true,
  }) as MenuItem[];

  return (
    <>
      <header>
        <Icons />

        <nav className="nav">
          <DesktopMenu
            className={isMobile ? 'hidden' : ''}
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
