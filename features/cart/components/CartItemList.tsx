import React from "react";
import CartItem from "./CartItem";
import CartShopController from "./CartShopController";
import { useCartContext } from "../hooks/useCartContext";
import { CartItemType } from "../types/cart";

export default function CartItemList() {
  const { items, setItems } = useCartContext();

  return (
    <section>
      <p>CART (0)</p>
      <div>
        {items.map((cartItem: CartItemType) => (
          <CartItem data={cartItem} />
        ))}
      </div>
      <div>
        <CartShopController />
      </div>
    </section>
  );
}
