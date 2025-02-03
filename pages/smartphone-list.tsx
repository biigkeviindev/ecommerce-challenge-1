import SearchBox from "@/components/products/SearchBox";
import Layout from "@/components/ui/Layout";
import { useProducts } from "@/hooks/useProducts";

export default function SmartphoneList() {
  const { data: products, isLoading, error } = useProducts();

  return (
    <Layout>
      <SearchBox />
    </Layout>
  );
}
