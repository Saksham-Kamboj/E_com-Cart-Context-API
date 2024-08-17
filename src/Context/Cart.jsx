import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const useCart = () => {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
};

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
