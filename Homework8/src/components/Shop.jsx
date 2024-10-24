import React from "react";
import ShopMenu from "./ShopMenu";
import ShopFilters from "./ShopFilters";
import Catalog from "./Catalog";

const Shop = () => {
  return (
    <div className="wrap">
      <div className="shop">
        <ShopMenu />
        <div className="shop__main">
          <ShopFilters />
          <Catalog />
        </div>
      </div>
    </div>
  );
};

export default Shop;