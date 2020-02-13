import { useEffect, useContext } from "react";

import { MenuContext } from "../providers/MenuContext";

import { useLanguages } from "./useLanguages";

export const useMenu = () => {
  const {
    offset,
    setOffset,
    isMobile,
    setIsMobile,
    isOpen,
    setIsOpen,
    ref
  } = useContext(MenuContext);

  const { language } = useLanguages();

  const openMenu = () => {
    setIsOpen(true);
    setOffset(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOffset(false);
  };

  const toggleMenu = () => {
    if (isOpen) closeMenu();
    else openMenu();
  };

  useEffect(() => {
    const onResize = () => {
      const breakPoint = ref.current.offsetHeight > 74;

      setIsMobile(breakPoint);
      setOffset(breakPoint ? isOpen : false);
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [isOpen, language, offset]);

  return {
    offset,
    isMobile,
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    ref
  };
};
