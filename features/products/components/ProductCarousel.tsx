import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ products }: any) {
  return (
    <section className="product-carousel">
      <p>SIMILAR ITEMS</p>
      <div className="product-carousel__container-items">
        {products?.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
}
