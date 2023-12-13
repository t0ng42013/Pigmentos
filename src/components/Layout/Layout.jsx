import React, { useContext } from 'react'
import { LayoutContainer } from './LayoutStyled'
import { MenuContext } from '../../context/MenuContext';

export const Layout = ({ children }) => {
   const { handleClose } = useContext(MenuContext);
  return <LayoutContainer onClick={handleClose}>{children}</LayoutContainer>;
}
