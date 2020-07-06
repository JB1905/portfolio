import { useEffect, useContext } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import { MenuContext } from '../contexts/MenuContext';

export const useMenu = () => {
  const {
    isMainLayoutHidden,
    setIsMainLayoutHidden,
    isMobile,
    setIsMobile,
    isOpen,
    setIsOpen,
  } = useContext(MenuContext);

  const openMenu = () => {
    setIsOpen(true);

    setIsMainLayoutHidden(true);
  };

  const closeMenu = () => {
    setIsOpen(false);

    setIsMainLayoutHidden(false);
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    const navbar = document.querySelector('.nav') as HTMLElement;

    const resizeObserver = new ResizeObserver(() => {
      const breakPoint = navbar.offsetHeight > 74;

      setIsMobile(breakPoint);

      setIsMainLayoutHidden(breakPoint ? isOpen : false);
    });

    resizeObserver.observe(navbar);

    return () => resizeObserver.unobserve(navbar);
  }, [isOpen]);

  return {
    isMainLayoutHidden,
    isMobile,
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
  };
};
