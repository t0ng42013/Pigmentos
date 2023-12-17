import React, { useContext } from "react";
import { CartBody, CartBtnBuy, CartContainer, CartItem } from "./CartMenuStyled";

import { FaRegTrashCan } from "react-icons/fa6";
import { MenuContext } from "../../context/MenuContext";
import { useCart } from "../../context/CartContext";

export const CartMenu = () => {

  const { isCartOpen } =  useContext(MenuContext);
   const { cartItems, removeFromCart, getTotalItems, getSubTotal } =
     useCart();

      const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
      };

  return (
    <CartContainer isOpen={isCartOpen}>
      <ul id="menuShopUl">
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <span>{item.name}</span>
              <span>1 x ${item.price}</span>
            </div>
            <FaRegTrashCan onClick={() => handleRemoveFromCart(item.id)} />
          </CartItem>
        ))}
      </ul>

      <hr />

      <CartBody>
        <div>
          <span>Total item</span>
          <span id="totalItem">{getTotalItems()}</span>
        </div>
        <div>
          <span>subtotal</span>
          <span id="subTotal">${getSubTotal()}</span>
        </div>
      </CartBody>

      <CartBtnBuy>Buy Now</CartBtnBuy>
    </CartContainer>
  );
};
