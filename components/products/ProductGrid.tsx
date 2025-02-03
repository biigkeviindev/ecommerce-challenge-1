import { useProducts } from "@/hooks/useProducts";
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const { data: products, isLoading, error } = useProducts();

  return (
    <section className="products-grid">
      <div>
        {products.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
}
