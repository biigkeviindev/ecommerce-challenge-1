import { useProducts } from "@/hooks/useProducts";
import React from "react";
import ProductCard from "./ProductCard";
import { useCatalog } from "@/hooks/useCatalog";

export default function ProductGrid() {
  const { search } = useCatalog();
  const { data: products, isLoading, error } = useProducts(search, 20);

  return (
    <section className="products-grid">
      <p>{`Busqueda: ${search}`}</p>
      <div className="products-grid__list">
        {products?.map((product: any) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
}
