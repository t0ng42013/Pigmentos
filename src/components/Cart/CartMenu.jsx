import React, { useContext } from "react";
import { CartBody, CartBtnBuy, CartContainer, CartItem } from "./CartMenuStyled";

import { FaRegTrashCan } from "react-icons/fa6";
import { MenuContext } from "../../context/MenuContext";

export const CartMenu = () => {

  const { isCartOpen } =  useContext(MenuContext);


  return (
    <CartContainer isOpen={ isCartOpen }>
      <ul id="menuShopUl">
        <CartItem>
          <img src="/src/assets/img/image1" alt="img" />
          <div>
            <span>tazas</span>
            <span>1 x $19</span>
          </div>
          <FaRegTrashCan />
        </CartItem>
      </ul>

      <hr />

      <CartBody>
        <div>
          <span>Total item</span>
          <span id="totalItem">0</span>
        </div>
        <div>
          <span>subtotal</span>
          <span id="subTotal">$0</span>
        </div>
      </CartBody>

      <CartBtnBuy>Buy Now</CartBtnBuy>
    </CartContainer>
  );
};
