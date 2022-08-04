import { useQuery } from "react-query";
import { getProducts } from "./productJsonRepository";

export const useProducts = () => {
    const { isFetching, error, data, refetch } = useQuery(
        ["products"],
        getProducts
      );
    
      return {
        isFetchingProducts: isFetching,
        productsError: error,
        products: data,
        refetchProducts: refetch,
      };
}