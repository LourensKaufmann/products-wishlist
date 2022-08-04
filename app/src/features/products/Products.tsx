import React, { FunctionComponent } from "react";
import { Product } from "../../shared/types/Product";
import { ProductFavorite } from "../../shared/types/ProductFavorite";

interface IProductsProps {
    products: Product[];
    productFavorites: ProductFavorite[];
}

const Products: FunctionComponent<IProductsProps> = ({
    products,
    productFavorites
}) => {
    return <div></div>;
}

export default Products;