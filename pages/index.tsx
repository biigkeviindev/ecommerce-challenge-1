import Layout from "@/features/layout/components/Layout";
import ProductList from "@/features/products/components/ProductList";
import NavigationBar from "@/features/layout/components/NavigationBar";
import SearchBox from "@/features/search/components/SearchBox";

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
