import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCartContext } from "../hooks/useCartContext";
import { CartItemType } from "../types/cart";

export default function CartShopController() {
  const [total, setTotal] = useState(0);
  const { push } = useRouter();
  const { items, setItems } = useCartContext();

  const goShipping = () => push("/");

  const calculateTotalCart = () => {
    let finalTotalCart = 0;
    items.forEach((item: CartItemType) => {
      finalTotalCart += item.price;
    });
    setTotal(finalTotalCart);
  };

  useEffect(() => {
    calculateTotalCart();
  }, [items]);

  return (
    <div className="cart-shop-controller">
      <div>
        <p className="cart-shop-controller__total-shop">
          TOTAL: <span> {total} EUR</span>
        </p>
      </div>
      <div className="cart-shop-controller__container-actions">
        <button
          onClick={goShipping}
          className="cart-shop-controller__btn-action cart-shop-controller__btn-action--continue"
        >
          CONTINUE SHOPPING
        </button>
        <button className="cart-shop-controller__btn-action cart-shop-controller__btn-action--buy">
          PAY
        </button>
      </div>
    </div>
  );
}
