import React from "react";
import ProductCard from "./ProductCard";

type ProductCarouselProps = {
  products: Array<any>;
};

export default function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <section className="product-carousel">
      <h2>SIMILAR ITEMS</h2>
      <div className="product-carousel__container-items">
        {products?.map((product: any, key: number) => (
          <ProductCard product={product} key={key} />
        ))}
      </div>
    </section>
  );
}
