import React, { useState, Dispatch, SetStateAction, useRef } from 'react';

export const MenuContext = React.createContext<{
  offset: boolean;
  setOffset: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  ref?: React.MutableRefObject<HTMLElement | undefined>;
}>({
  offset: false,
  setOffset: () => null,
  isMobile: true,
  setIsMobile: () => null,
  isOpen: false,
  setIsOpen: () => null,
  ref: undefined,
});

export const MenuProvider: React.FC = ({ children }) => {
  const [offset, setOffset] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLElement>();

  return (
    <MenuContext.Provider
      value={{
        offset,
        setOffset,
        isMobile,
        setIsMobile,
        isOpen,
        setIsOpen,
        ref,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
