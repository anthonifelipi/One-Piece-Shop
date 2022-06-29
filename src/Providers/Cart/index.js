import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    toast.success("Produto adicionado com sucesso!");
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((itemCart) => itemCart.id !== item.id);
    toast.error("Produto removido com sucesso!");
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
