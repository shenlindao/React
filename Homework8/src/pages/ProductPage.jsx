import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Catalog from "../components/Catalog";
import YouMayLikeAlso from "../components/YouMayLikeAlso";
import ProductCard from "../components/ProductCard";
import NotFound from "../components/NotFound";
import productsData from "../data/products";

const ProductPage = () => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));

  return (
    <>
      {product ? (
        <>
          <Breadcrumbs />
          <ProductCard product={product} />
          <YouMayLikeAlso />
        </>
      ) : (
        <NotFound />
      )}
      <Catalog />
    </>
  );
};

export default ProductPage;
