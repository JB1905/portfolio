import React, { useState, Dispatch, SetStateAction } from 'react';

export const MenuContext = React.createContext<{
  isMainLayoutHidden: boolean;
  setIsMainLayoutHidden: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isMainLayoutHidden: false,
  setIsMainLayoutHidden: () => null,
  isMobile: true,
  setIsMobile: () => null,
  isOpen: false,
  setIsOpen: () => null,
});

export const MenuProvider: React.FC = ({ children }) => {
  const [isMainLayoutHidden, setIsMainLayoutHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isMainLayoutHidden,
        setIsMainLayoutHidden,
        isMobile,
        setIsMobile,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
