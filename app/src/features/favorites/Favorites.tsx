import React, { FunctionComponent } from "react";
import { Product } from "../../shared/types/Product";
import { ProductFavorite } from "../../shared/types/ProductFavorite";

interface IFavoritesProps {
    products: Product[];
    productFavorites: ProductFavorite[];
}

const Favorites: FunctionComponent<IFavoritesProps> = ({
    products,
    productFavorites
}) => {

    return <div></div>;
}

export default Favorites;