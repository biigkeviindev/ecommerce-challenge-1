import { CartProvider } from "@/contexts/CartContext";
import { CatalogProvider } from "@/contexts/CatalogContext";
import CartItemList from "@/features/cart/components/CartItemList";
import Layout from "@/features/layout/components/Layout";
import NavigationBar from "@/features/layout/components/NavigationBar";

export default function CartView() {
  return (
    <>
      <NavigationBar showCart={false} />
      <Layout>
        <CartItemList />
      </Layout>
    </>
  );
}
