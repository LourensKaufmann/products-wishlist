import { useQuery, useMutation } from "react-query";
import { addProductFavorite, getProductFavorites, removeProductFavorite } from "./favoriteLocalStorageRepository";

export const useProductFavorites = () => {
    const { isFetching, error, data, refetch } = useQuery(
        ["productFavorites"],
        getProductFavorites
      );
    
      return {
        isFetchingProductFavorites: isFetching,
        productFavoritesError: error,
        productFavorites: data,
        refetchProductFavorites: refetch,
      };
}

export const useAddProductFavorite = () => {
    const { isLoading, mutateAsync, error } = useMutation(
        (productId: number) =>
            addProductFavorite(productId)
    );

    return {
        isAddingProductFavorite: isLoading,
        addProductFavorite: mutateAsync,
        addProductFavoriteError: error,
    };
}

export const useRemoveProductFavorite = () => {
    const { isLoading, mutateAsync, error } = useMutation(
        (productId: number) =>
            removeProductFavorite(productId)
    );

    return {
        isRemovingProductFavorite: isLoading,
        removeProductFavorite: mutateAsync,
        removeProductFavoriteError: error,
    };
}