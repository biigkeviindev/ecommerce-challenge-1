import React from "react";
import CartItem from "./CartItem";
import CartShopController from "./CartShopController";
import { useCartContext } from "../hooks/useCartContext";
import { CartItemType } from "../types/cart";

export default function CartItemList() {
  const { items } = useCartContext();

  return (
    <section className="cart-item-list">
      <p>CART ({items.length})</p>
      <div className="cart-item-list__container-items">
        {items.map((cartItem: CartItemType, index: number) => (
          <CartItem data={cartItem} key={index} />
        ))}
      </div>
      <div>
        <CartShopController />
      </div>
    </section>
  );
}
