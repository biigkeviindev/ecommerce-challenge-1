import Layout from "@/features/layout/components/Layout";

import { CatalogProvider } from "@/contexts/CatalogContext";
import ProductList from "@/features/products/components/ProductList";
import SearchBox from "@/features/search/SearchBox";

export default function SmartphoneList() {
  return (
    <CatalogProvider>
      <Layout>
        <SearchBox />
        <ProductList />
      </Layout>
    </CatalogProvider>
  );
}
