import { apiClient } from "@/lib/apiClient";
const API = "https://prueba-tecnica-api-tienda-moviles.onrender.com";

export const fetchProductList = async () => {
  const { data } = await apiClient.get(`${API}/products`);
  return data;
};

export const fetchProductById = async (id: string) => {
  const { data } = await apiClient.get(`${API}/products/${id}`);
  return data;
};
