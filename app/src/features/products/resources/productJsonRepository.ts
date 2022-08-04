import { Product } from "../../../shared/types/Product";
import products from "../../../fixtures/products.json"

const getProducts = async (): Promise<Product[]> => {
  const result: Product[] = products;
  return result;
};

export { getProducts };
