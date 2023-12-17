import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
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

const getTotalItems = () => {
  return cartItems.reduce((total, item) => total + 1, 0);
};

  const getSubTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

return (
  <CartContext.Provider
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      getTotalItems,
      getSubTotal,
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