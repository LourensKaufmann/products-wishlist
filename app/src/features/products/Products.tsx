import React, { FunctionComponent } from "react";
import {
  useAddProductFavorite,
  useProductFavorites,
  useRemoveProductFavorite,
} from "../favorites/resources/favoriteQueries";
import { useProducts } from "./resources/productQueries";
import Table from "react-bootstrap/Table";
import { Product } from "../../shared/types/Product";
import { StarIcon as StarIconOutline } from "@heroicons/react/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/solid";
import { ProductFavorite } from "../../shared/types/ProductFavorite";

const Products: FunctionComponent = () => {
  const { products, isFetchingProducts } = useProducts();
  const {
    productFavorites,
    isFetchingProductFavorites,
    refetchProductFavorites,
  } = useProductFavorites();

  const { addProductFavorite } = useAddProductFavorite();
  const { removeProductFavorite } = useRemoveProductFavorite();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product: Product, index: number) => (
          <tr key={index}>
            <td className="product-id-cell">
              {productFavorites?.some(
                (pf: ProductFavorite) => pf.productId === product.id
              ) ? (
                <StarIconSolid
                  className="favorites-button"
                  color="#333333"
                  width={16}
                  onClick={async () => {
                    await removeProductFavorite(product.id, true);
                    await refetchProductFavorites();
                  }}
                />
              ) : (
                <StarIconOutline
                  className="favorites-button"
                  color="#333333"
                  width={16}
                  onClick={async () => {
                    await addProductFavorite(product.id);
                    await refetchProductFavorites();
                  }}
                />
              )}

              <div>{product.id}</div>
            </td>
            <td>{product.name}</td>
            <td>{product.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Products;
