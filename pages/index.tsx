import Layout from "@/features/layout/components/Layout";

import { CatalogProvider } from "@/contexts/CatalogContext";
import ProductList from "@/features/products/components/ProductList";
import NavigationBar from "@/features/layout/components/NavigationBar";
import SearchBox from "@/features/search/components/SearchBox";
import { CartProvider } from "@/contexts/CartContext";

export default function IndexView() {
  return (
    <>
      <NavigationBar />
      <Layout>
        <SearchBox />
        <ProductList />
      </Layout>
    </>
  );
}
