import React from "react";
import "./styles.scss";
import Favorites from "./features/favorites/Favorites";
import Products from "./features/products/Products";
import Sidebar from "./components/Sidebar";
import { useProducts } from "./features/products/resources/productQueries";
import {
  useProductFavorites,
} from "./features/favorites/resources/favoriteQueries";

function App() {
  const { products, isFetchingProducts } = useProducts();
  const {
    productFavorites,
    isFetchingProductFavorites,
  } = useProductFavorites();

  const isFetching = isFetchingProducts || isFetchingProductFavorites;

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Products products={products} productFavorites={productFavorites} />
        <Favorites products={products} productFavorites={productFavorites} />
      </div>
    </div>
  );
}

export default App;
