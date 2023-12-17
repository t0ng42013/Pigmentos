import React, { useContext } from 'react'
import { LayoutContainer } from './LayoutStyled'
import { MenuContext } from '../../context/MenuContext';

export const Layout = ({ children }) => {
   const { handleClose, isMenuOpen, isCartOpen } = useContext(MenuContext);
  return (
    <LayoutContainer
      onClick={handleClose}
      isMenuOpen={isMenuOpen}
      isCartOpen={isCartOpen}
    >
      {children}
      <div className={`overlay ${isMenuOpen || isCartOpen ? "active" : ""}`}>
        {" "}
      </div>
    </LayoutContainer>
  );
}
