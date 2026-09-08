import { useMemo, useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (product) =>
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      return existing
        ? items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...items, { ...product, quantity: 1 }];
    });
  const removeFromCart = (id) =>
    setCart((items) => items.filter((item) => item.id !== id));
  const value = useMemo(() => ({ cart, addToCart, removeFromCart }), [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
