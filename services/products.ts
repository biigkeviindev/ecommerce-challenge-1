import { apiClient } from "@/lib/apiClient";
const API = "https://prueba-tecnica-api-tienda-moviles.onrender.com";

export const fetchProductList = async ({ queryKey }: any) => {
  const [, { limit, search }] = queryKey;
  const { data } = await apiClient.get(`${API}/products`, {
    params: { limit, search },
  });
  return data;
};

export const fetchProductById = async (id: string) => {
  const { data } = await apiClient.get(`${API}/products/${id}`, {
    params: { id },
  });
  return data;
};
