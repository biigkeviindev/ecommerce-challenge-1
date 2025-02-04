import React from "react";
import { useCatalog } from "@/hooks/useCatalog";
import { useProducts } from "@/features/products/hooks/useProducts";
import ProductCard from "@/features/products/components/ProductCard";

export default function ProductList() {
  const { search } = useCatalog();
  const { data: products, isLoading, error } = useProducts(search, 20);

  return (
    <section className="products-grid">
      <div className="products-grid__list">
        {products?.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
}
