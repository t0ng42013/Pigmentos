import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext';
import { FaCartArrowDown } from 'react-icons/fa';
import { Cart } from '../Navbar/StyledNav';
import { useCart } from "../../context/CartContext";


export const CartIcon = () => {

   const {  getTotalItems } = useCart();

const { toggleCart } = useContext(MenuContext);

  return (
    <Cart onClick={toggleCart}>
      <FaCartArrowDown />
      <span>{getTotalItems()}</span>
    </Cart>
  );
}
