import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';
import { FaCartArrowDown } from 'react-icons/fa';
import { Cart } from '../Navbar/StyledNav';

export const CartIcon = () => {

const { toggleCart } = useContext(MenuContext);

  return (
    <Cart onClick={toggleCart}>
      <FaCartArrowDown />
      <span>3</span>
    </Cart>
  );
}
