import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import React, { FunctionComponent } from "react";
import { Table } from "react-bootstrap";
import { ProductFavorite } from "../../shared/types/ProductFavorite";
import { useProducts } from "../products/resources/productQueries";
import {
  useAddProductFavorite,
  useProductFavorites,
  useRemoveProductFavorite,
} from "./resources/favoriteQueries";

const Favorites: FunctionComponent = () => {
  const { refetchProducts } = useProducts();
  const { productFavorites, refetchProductFavorites } = useProductFavorites();

  const { addProductFavorite } = useAddProductFavorite();
  const { removeProductFavorite } = useRemoveProductFavorite();

  const refetch = () => {
    refetchProducts();
    refetchProductFavorites();
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product id</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productFavorites?.map((pf: ProductFavorite, index: number) => (
          <tr key={index}>
            <td>{pf.productId}</td>
            <td>{pf.quantity}</td>
            <td>
              <PlusIcon
                className="favorites-button"
                color="#333333"
                width={16}
                onClick={async () => {
                  await addProductFavorite(pf.productId);
                  refetch();
                }}
              />
              <MinusIcon
                className="favorites-button"
                color="#333333"
                width={16}
                onClick={async () => {
                  await removeProductFavorite(pf.productId);
                  refetch();
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Favorites;
