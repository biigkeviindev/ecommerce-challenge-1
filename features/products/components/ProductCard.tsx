import React from "react";
import { useRouter } from "next/router";

type ProductCard = {
  product: Product;
};

type Product = {
  basePrice: number;
  brand: string;
  id: string;
  imageUrl: string;
  name: string;
};

export default function ProductCard({ product }: ProductCard) {
  const { push } = useRouter();

  return (
    <div
      onClick={() => push(`/product/${product.id}`)}
      className="product-card"
    >
      <img
        className="product-card__media"
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="product-card__data">
        <div>
          <span className="product-card__brand">{product.brand}</span>
          <p>{product.name}</p>
        </div>
        <div>
          <p>{product.basePrice} EUR</p>
        </div>
      </div>
    </div>
  );
}
