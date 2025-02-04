import BarBack from "@/features/layout/components/BarBack";
import Layout from "@/features/layout/components/Layout";
import ProductDetail from "@/features/products/components/ProductDetail";

export default function ProductDetailView() {
  return (
    <Layout>
      <BarBack uri="/smartphone-list" />
      <ProductDetail />
    </Layout>
  );
}
