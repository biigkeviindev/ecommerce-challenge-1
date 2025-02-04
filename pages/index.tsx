import Layout from "@/features/layout/components/Layout";

import { CatalogProvider } from "@/contexts/CatalogContext";
import ProductList from "@/features/products/components/ProductList";
import SearchBox from "@/features/search/SearchBox";
import NavigationBar from "@/features/layout/components/NavigationBar";

export default function IndexView() {
  return (
    <CatalogProvider>
      <NavigationBar />
      <Layout>
        <SearchBox />
        <ProductList />
      </Layout>
    </CatalogProvider>
  );
}
