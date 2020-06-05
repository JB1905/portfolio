import React, {
  useState,
  // useRef,
  Dispatch,
  SetStateAction,
  // RefObject,
} from 'react';

export const MenuContext = React.createContext<{
  isMainLayoutHidden: boolean;
  setIsMainLayoutHidden: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
  setIsMobile: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  // ref?: RefObject<HTMLElement>;
}>({
  isMainLayoutHidden: false,
  setIsMainLayoutHidden: () => null,
  isMobile: true,
  setIsMobile: () => null,
  isOpen: false,
  setIsOpen: () => null,
  // ref: undefined,
});

export const MenuProvider: React.FC = ({ children }) => {
  const [isMainLayoutHidden, setIsMainLayoutHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // const ref = useRef<HTMLElement>(null);

  return (
    <MenuContext.Provider
      value={{
        isMainLayoutHidden,
        setIsMainLayoutHidden,
        isMobile,
        setIsMobile,
        isOpen,
        setIsOpen,
        // ref,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
