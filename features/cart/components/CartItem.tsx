import React from "react";
import { useCartContext } from "../hooks/useCartContext";
import { CartItemType } from "../types/cart";

type CartItemProps = {
  data: CartItemType;
};

export default function CartItem({ data }: CartItemProps) {
  const { setItems, items } = useCartContext();

  const deleteItem = () => {
    setItems(items.filter((item) => item.id !== data.id));
  };

  return (
    <div className="cart-item">
      <div>
        <img className="cart-item__media" src={data.image} alt="" />
      </div>
      <div className="cart-item__content">
        <div className="cart-item__container-data">
          <div>
            <p className="cart-item__title">{data.name}</p>
            <p className="cart-item__info">
              {data.customize.capacity} | {data.customize.color}
            </p>
          </div>
          <span className="cart-item__price">{data.price} EUR</span>
        </div>
        <p onClick={deleteItem} className="cart-item__btn-delete">
          Eliminar
        </p>
      </div>
    </div>
  );
}
