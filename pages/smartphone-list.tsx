import SearchBox from "@/components/products/SearchBox";
import Layout from "@/components/layout/Layout";
import { useProducts } from "@/hooks/useProducts";
import ProductGrid from "@/components/products/ProductGrid";
import { CatalogProvider } from "@/contexts/CatalogContext";

export default function SmartphoneList() {
  return (
    <CatalogProvider>
      <Layout>
        <SearchBox />
        <ProductGrid />
      </Layout>
    </CatalogProvider>
  );
}
