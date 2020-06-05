import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Icons from '../icons';
import { MenuSwitch } from '../switch';
import DesktopMenu from './desktop';
import MobileMenu from './mobile';

import { useMenu } from '../../hooks/useMenu';

import { MenuQuery } from '../../../graphql-types';

import './menu.scss';

const Menu: React.FC = () => {
  const { toggleMenu, closeMenu, isMobile, isOpen, ref } = useMenu();

  // const data = useStaticQuery<MenuQuery>(query);

  return (
    <>
      <header>
        <Icons />

        <nav className="nav" ref={ref}>
          {/* <DesktopMenu
            className={`${isMobile ? 'hidden' : ''}`}
            // content={data[language].menu}
          /> */}

          {isMobile && <MenuSwitch onClick={toggleMenu} />}
        </nav>
      </header>

      {/* <MobileMenu
        className={`${isMobile ? '' : 'hidden'} ${isOpen ? 'opened' : ''}`}
        // content={data[language].menu}
        toggleMenu={closeMenu}
      /> */}
    </>
  );
};

// export const query = graphql`
//   query Menu {
//     pl: languagesJson(lang: { eq: "pl" }) {
//       menu {
//         title
//         link
//       }
//     }
//     en: languagesJson(lang: { eq: "en" }) {
//       menu {
//         title
//         link
//       }
//     }
//   }
// `;

export default Menu;
