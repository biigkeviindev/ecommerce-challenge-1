import { useRouter } from "next/router";
import React from "react";

export default function CartShopController() {
  const { push } = useRouter();

  const goShipping = () => push("/");

  return (
    <div className="cart-shop-controller">
      <div>
        <p className="cart-shop-controller__total-shop">
          TOTAL: <span> 22 EUR</span>
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
