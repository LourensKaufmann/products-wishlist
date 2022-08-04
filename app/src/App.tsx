import React from "react";
import "./styles.scss";
import Favorites from "./features/favorites/Favorites";
import Products from "./features/products/Products";
import { AcademicCapIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function App() {
  return (
    <div className="app">
      <div className="header">
        <AcademicCapIcon color="white" width={48} />
        <StarIcon className="favorites-button" color="white" width={40} />
      </div>
      <div className="main">
        <div>
          Products
          <Products />
        </div>
        <div>
          Favorites
          <Favorites />
        </div>
      </div>
    </div>
  );
}

export default App;
