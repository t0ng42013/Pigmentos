import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider =({children})=>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      setIsCartOpen(false);
    };
    
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
      setIsMenuOpen(false); 
    };

    const handleClose = () => {
      setIsMenuOpen(false);
      setIsCartOpen(false);
    };

    return (
      <MenuContext.Provider
        value={{
          isMenuOpen,
          isCartOpen,
          toggleMenu,
          toggleCart,
          handleClose,
        }}
      >
        {children}
      </MenuContext.Provider>
    );
};


