import { useProducts } from "@/hooks/useProducts";
import React from "react";

export default function SmartphoneList() {
  const { data: products, isLoading, error } = useProducts();

  if (!isLoading) return <p>Cargando productos...</p>;
  if (!error) return <p>Error al cargar productos...</p>;
  return (
    <main>
      <h1>kevin</h1>
    </main>
  );
}
