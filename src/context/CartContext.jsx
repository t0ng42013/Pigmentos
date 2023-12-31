import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(storedCartItems);
  
 const generateUniqueId = () => {
   return Date.now().toString(); // Genera un ID único basado en la hora actual
 };

 const addToCart = (item) => {
   const newItem = { ...item, id: generateUniqueId(), quantity: 1 };
   setCartItems([...cartItems, newItem]);
 };

const removeFromCart = (itemId) => {
  const updatedCart = cartItems.filter((item) => item.id !== itemId);
  setCartItems(updatedCart);
};

const removeAllFromCart = () => {
  setCartItems([]); // Asigna un array vacío para eliminar todos los elementos del carrito
};

const getTotalItems = () => {
  return cartItems.reduce((total, item) => total + 1, 0);
};

  const getSubTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
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