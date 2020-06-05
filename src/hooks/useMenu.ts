import { useEffect, useContext } from 'react';

import { MenuContext } from '../contexts/MenuContext';

export const useMenu = () => {
  const {
    isMainLayoutHidden,
    setIsMainLayoutHidden,
    isMobile,
    setIsMobile,
    isOpen,
    setIsOpen,
    // ref,
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
    // const onResize = () => {
    //   const breakPoint = ref.current.offsetHeight > 74;
    //   setIsMobile(breakPoint);
    //   setIsMainLayoutHidden(breakPoint ? isOpen : false);
    // };
    // onResize();
    // window.addEventListener('resize', onResize);
    // return () => window.removeEventListener('resize', onResize);
  }, [isOpen, isMainLayoutHidden]);

  return {
    isMainLayoutHidden,
    isMobile,
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    // ref,
  };
};
