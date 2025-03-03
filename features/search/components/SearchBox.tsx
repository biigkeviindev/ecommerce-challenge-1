import { useCatalog } from "@/contexts/useCatalog";
import { useProducts } from "@/features/products/hooks/useProducts";
import React, { useState } from "react";

export default function SearchBox() {
  const { search, setSearch } = useCatalog();
  const { data } = useProducts(search, 20);

  return (
    <div className="search-box">
      <div className="search-box__container">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
          placeholder="Search for a smartphone..."
          type="text"
        />
        <img onClick={() => setSearch("")} src="Close.svg" alt="Close Icon" />
      </div>
      <p className="search-box__size-items">{data && data.length} RESULTS</p>
    </div>
  );
}
