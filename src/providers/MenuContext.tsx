import React, { useState, Dispatch, SetStateAction, useRef } from "react";

import { WrapperProps } from "../interfaces/WrapperProps";

export const MenuContext = React.createContext<{
  offset: boolean;
  setOffset: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  ref: any;
}>({
  offset: false,
  setOffset: () => null,
  isMobile: true,
  setIsMobile: () => null,
  isOpen: false,
  setIsOpen: () => null,
  ref: null
});

export const MenuProvider = ({ children }: WrapperProps) => {
  const [offset, setOffset] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<any>();

  return (
    <MenuContext.Provider
      value={{
        offset,
        setOffset,
        isMobile,
        setIsMobile,
        isOpen,
        setIsOpen,
        ref
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
