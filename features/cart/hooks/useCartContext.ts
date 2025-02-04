import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCartContext is not valid");

  return context;
};
