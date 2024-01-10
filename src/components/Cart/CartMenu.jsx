import React, { useContext } from "react";
import {
  CartBody,
  CartBtnBuy,
  CartCleanBtn,
  CartContainer,
  CartItem,
} from "./CartMenuStyled";

import { FaRegTrashCan } from "react-icons/fa6";
import { MenuContext } from "../../context/MenuContext";
import { useCart } from "../../context/CartContext";
import Swal from "sweetalert2";

import { CiFaceFrown } from "react-icons/ci";

export const CartMenu = () => {
  const { isCartOpen } = useContext(MenuContext);
  const {
    cartItems,
    removeFromCart,
    getTotalItems,
    getSubTotal,
    removeAllFromCart,
  } = useCart();

  const handleRemoveFromCart = (itemId) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este producto?",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Acción cuando se confirma la eliminación
        Swal.fire("¡Producto eliminado!", "", "success");
        removeFromCart(itemId); // Llama a la función para eliminar el producto
      }
    });
  };

  const handleRemoveAll = () => {
   

       Swal.fire({
         title: "¿Estás seguro de eliminar todo?",
         showCancelButton: true,
         confirmButtonText: "Sí, eliminar",
         cancelButtonText: "Cancelar",
         
       }).then((result) => {
         if (result.isConfirmed) {
           // Acción cuando se confirma la eliminación
           Swal.fire("¡Carrito Vacio!", "", "success");
           removeAllFromCart();
         }
       });
    
  };

    const handleBuyNow = () => {
      Swal.fire({
        title: "¿Desea finalizar la compra?",
        showCancelButton: true,
        confirmButtonText: "Sí, finalizar compra",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("¡Compra finalizada!", "", "success");
          removeAllFromCart();
        }
      });
    };

  return (
    <CartContainer isOpen={isCartOpen}>
      <ul id="menuShopUl">
        {cartItems.length === 0 ? (
          <p className="cartVacio">
            Carrito Vacío
            <span>
              <CiFaceFrown />
            </span>
          </p>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <span>{item.name}</span>
                <span>
                  {item.quantity} x ${item.price}
                </span>
              </div>
              <FaRegTrashCan onClick={() => handleRemoveFromCart(item.id)} />
            </CartItem>
          ))
        )}
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
      <div>
        {cartItems.length !== 0 && (
          <CartBtnBuy onClick={() => handleBuyNow()}>Comprar</CartBtnBuy>
        )}

        {cartItems.length !== 0 && (
          <CartCleanBtn onClick={() => handleRemoveAll()}>Vaciar</CartCleanBtn>
        )}
      </div>
    </CartContainer>
  );
};
