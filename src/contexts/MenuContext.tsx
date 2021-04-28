import { useState, Dispatch, SetStateAction } from 'react';
import * as React from 'react';

interface ContextProps {
  readonly isMainLayoutHidden: boolean;
  setIsMainLayoutHidden: Dispatch<SetStateAction<boolean>>;
  readonly isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
  readonly isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = React.createContext<ContextProps>({
  isMainLayoutHidden: false,
  setIsMainLayoutHidden: () => null,
  isMobile: true,
  setIsMobile: () => null,
  isOpen: false,
  setIsOpen: () => null,
});

interface Props {
  readonly children: React.ReactNode;
}

export const MenuProvider = ({ children }: Props) => {
  const [isMainLayoutHidden, setIsMainLayoutHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const value: ContextProps = {
    isMainLayoutHidden,
    setIsMainLayoutHidden,
    isMobile,
    setIsMobile,
    isOpen,
    setIsOpen,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
