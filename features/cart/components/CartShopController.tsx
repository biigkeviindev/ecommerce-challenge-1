import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCartContext } from "../hooks/useCartContext";
import { CartItemType } from "../types/cart";

export default function CartShopController() {
  const [total, setTotal] = useState(0);
  const { push } = useRouter();
  const { items } = useCartContext();

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
        {items.length ? (
          <p className="cart-shop-controller__total-shop">
            TOTAL: <span> {total} EUR</span>
          </p>
        ) : null}
      </div>
      <div className="cart-shop-controller__container-actions">
        <button
          onClick={goShipping}
          className="cart-shop-controller__btn-action cart-shop-controller__btn-action--continue"
        >
          CONTINUE SHOPPING
        </button>
        {items.length ? (
          <button className="cart-shop-controller__btn-action cart-shop-controller__btn-action--buy">
            PAY
          </button>
        ) : null}
      </div>
    </div>
  );
}
