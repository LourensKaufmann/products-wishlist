import { ProductFavorite } from "../../../shared/types/ProductFavorite";

const productFavoritesLocalStorageKey = "ls-product-favorites";

const getProductFavorites = async (): Promise<ProductFavorite[]> => {
  const item = window.localStorage.getItem(productFavoritesLocalStorageKey);
  const data: ProductFavorite[] = item ? JSON.parse(item) : [];
  return data;
};

const addProductFavorite = async (productId: number): Promise<void> => {
  const productFavorites = await getProductFavorites();
  if (!productFavorites.some((pf) => pf.productId === productId)) {
    productFavorites.push({ productId });
    window.localStorage.setItem(
      productFavoritesLocalStorageKey,
      JSON.stringify(productFavorites)
    );
  }
};

const removeProductFavorite = async (productId: number): Promise<void> => {
  const productFavorites = await getProductFavorites();
  if (productFavorites.some((pf) => pf.productId === productId)) {
    window.localStorage.setItem(
      productFavoritesLocalStorageKey,
      JSON.stringify(
        productFavorites.filter((pf) => pf.productId !== productId)
      )
    );
  }
};

export { getProductFavorites, addProductFavorite, removeProductFavorite };
