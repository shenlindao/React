import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Catalog from "../components/Catalog";
import SimpleAdvantages from "../components/SimpleAdvantages";

const CatalogPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="wrap">
        <Catalog />
      </div>
        <SimpleAdvantages />
    </>
  );
};

export default CatalogPage;
