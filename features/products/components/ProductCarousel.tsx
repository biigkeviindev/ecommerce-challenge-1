import React from "react";
import ProductCard from "./ProductCard";

type ProductCarouselProps = {
  products: Array<any>;
};

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
