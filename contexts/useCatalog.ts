import { CatalogContext } from "@/contexts/CatalogContext";
import { useContext } from "react";

export const useCatalog = () => {
  const context = useContext(CatalogContext);

  if (!context) throw new Error("useCatalog is not valid.");

  return context;
};
