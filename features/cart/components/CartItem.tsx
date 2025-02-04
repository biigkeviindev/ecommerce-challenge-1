import React from "react";

export default function CartItem() {
  return (
    <div className="cart-item">
      <div>
        <img className="cart-item__media" src="iphone.png" alt="" />
      </div>
      <div className="cart-item__content">
        <div className="cart-item__container-data">
          <div>
            <p className="cart-item__title">galaxy s24 ultra</p>
            <p className="cart-item__info">512 GB | violeta titanium</p>
          </div>
          <span className="cart-item__price">1800 EUR</span>
        </div>
        <p className="cart-item__btn-delete">Eliminar</p>
      </div>
    </div>
  );
}
