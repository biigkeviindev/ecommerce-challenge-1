import { CatalogProvider } from "@/contexts/CatalogContext";
import Layout from "@/features/layout/components/Layout";

export default function CartView() {
  return (
    <CatalogProvider>
      <Layout>
        <p>Carrito de compra</p>
      </Layout>
    </CatalogProvider>
  );
}
