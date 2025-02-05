import { CartItemType } from "@/features/cart/types/cart";
import { createContext, useState, ReactNode } from "react";

type CartContext = {
  items: Array<CartItemType>;
  setItems: (value: any) => void;
};

export const CartContext = createContext<CartContext | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
