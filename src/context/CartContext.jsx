import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(storedCartItems);
  
  const [quantityProd, setQuantityProd] = useState(1);

  

 const addToCart = (item) => {
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItemIndex !== -1) {
    // Si el producto ya está en el carrito, actualiza la cantidad
    const updatedCartItems = [...cartItems];
    updatedCartItems[existingItemIndex].quantity = quantityProd;
    setCartItems(updatedCartItems);
    
  } else {
    // Si el producto no está en el carrito, agrégalo con una cantidad inicial de 1
    const newItem = { ...item, quantity: quantityProd };
    setCartItems([...cartItems, newItem]);
  }
 };

const removeFromCart = (itemId) => {
  const updatedCart = cartItems.filter((item) => item.id !== itemId);
  setCartItems(updatedCart);
};

const removeAllFromCart = () => {
  setCartItems([]); // Asigna un array vacío para eliminar todos los elementos del carrito
};

const getTotalItems = () => {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + parseInt(item.quantity),
    0
  );
  return totalQuantity;
};

  const getSubTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

 useEffect(() => {
   localStorage.setItem("cartItems", JSON.stringify(cartItems));
 }, [cartItems]);


return (
  <CartContext.Provider
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      getTotalItems,
      getSubTotal,
      removeAllFromCart,
      quantityProd,
      setQuantityProd,
    }}
  >
    {children}
  </CartContext.Provider>
);
};



export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};