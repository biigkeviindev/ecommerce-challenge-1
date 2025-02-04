import React from "react";
import CartItem from "./CartItem";
import CartShopController from "./CartShopController";

export default function CartItemList() {
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
