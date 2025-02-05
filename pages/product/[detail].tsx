import BarBack from "@/features/layout/components/BarBack";
import Layout from "@/features/layout/components/Layout";
import NavigationBar from "@/features/layout/components/NavigationBar";
import ProductDetail from "@/features/products/components/ProductDetail";

export default function ProductDetailView() {
  return (
    <>
      <NavigationBar showCart={true} />
      <Layout>
        <BarBack uri="/" />
        <ProductDetail />
      </Layout>
    </>
  );
}
