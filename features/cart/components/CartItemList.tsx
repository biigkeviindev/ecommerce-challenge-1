import React from "react";
import CartItem from "./CartItem";
import CartShopController from "./CartShopController";
import { useCartContext } from "../hooks/useCartContext";

export default function CartItemList() {
  const { items, setItems } = useCartContext();
  console.log(items);
  return (
    <section>
      <p>CART (0)</p>
      <div>
        <CartItem />
        <CartItem />
      </div>
      <div>
        <CartShopController />
      </div>
    </section>
  );
}
