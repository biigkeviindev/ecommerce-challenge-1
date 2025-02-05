import React from "react";
import { useProducts } from "@/features/products/hooks/useProducts";
import ProductCard from "@/features/products/components/ProductCard";
import { useCatalog } from "@/contexts/useCatalog";

export default function ProductList() {
  const { search } = useCatalog();
  const { data: products } = useProducts(search, 20);

  return (
    <section className="products-grid">
      <div className="products-grid__list">
        {products?.map((product: any, key: number) => (
          <ProductCard product={product} key={key} />
        ))}
      </div>
    </section>
  );
}
