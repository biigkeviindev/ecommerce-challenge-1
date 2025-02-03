import SearchBox from "@/components/products/SearchBox";
import Layout from "@/components/layout/Layout";
import { useProducts } from "@/hooks/useProducts";
import ProductGrid from "@/components/products/ProductGrid";

export default function SmartphoneList() {
  const { data: products, isLoading, error } = useProducts();

  return (
    <Layout>
      <SearchBox />
      <ProductGrid />
    </Layout>
  );
}
