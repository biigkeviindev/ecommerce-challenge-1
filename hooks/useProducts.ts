import { fetchProductById, fetchProductList } from "@/services/products";
import { useQuery } from "@tanstack/react-query";

const LIMIT_PRODUCTS_API_REQUEST = 20;

export const useProducts = (
  search: string | null,
  limit: number = LIMIT_PRODUCTS_API_REQUEST
) => {
  return useQuery({
    queryKey: ["products", { limit, search }],
    queryFn: fetchProductList,
    staleTime: 1000 * 60 * 5,
  });
};

export const useProductById = (search: string | null | undefined) => {
  return useQuery({
    queryKey: ["product", search],
    queryFn: () => fetchProductById(String(search)),
    enabled: !!search,
  });
};
