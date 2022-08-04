import { ProductFavorite } from "../../../shared/types/ProductFavorite";

const productFavoritesLocalStorageKey = "ls-product-favorites";

const getProductFavorites = async (): Promise<ProductFavorite[]> => {
  const item = window.localStorage.getItem(productFavoritesLocalStorageKey);
  const data: ProductFavorite[] = item ? JSON.parse(item) : [];
  return data;
};

// TODO: Test this
const addProductFavorite = async (productId: number): Promise<void> => {
  const productFavorites = await getProductFavorites();
  const existingProductFavorite = productFavorites.find(
    (pf) => pf.productId === productId
  );

  if (existingProductFavorite) {
    existingProductFavorite.quantity += 1;
  } else {
    productFavorites.push({ productId, quantity: 1 });
  }

  window.localStorage.setItem(
    productFavoritesLocalStorageKey,
    JSON.stringify(productFavorites)
  );
};

// TODO: Test this
const removeProductFavorite = async (productId: number, fullyRemove: boolean): Promise<void> => {
  const productFavorites = await getProductFavorites();
  const existingProductFavorite = productFavorites.find(
    (pf) => pf.productId === productId
  );

  if (existingProductFavorite) {
    if (existingProductFavorite.quantity === 1 || fullyRemove) {
      window.localStorage.setItem(
        productFavoritesLocalStorageKey,
        JSON.stringify(
          productFavorites.filter((pf) => pf.productId !== productId)
        )
      );
    } else {
      existingProductFavorite.quantity -= 1;
      window.localStorage.setItem(
        productFavoritesLocalStorageKey,
        JSON.stringify(productFavorites)
      );
    }
  }
};

export { getProductFavorites, addProductFavorite, removeProductFavorite };
