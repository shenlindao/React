import React, { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import productsData from "../data/products";

const BreadcrumbsContext = createContext([]);

export const BreadcrumbsProvider = ({ children }) => {
  const location = useLocation();

  const breadcrumbs = useMemo(() => {
    const paths = location.pathname.split("/").filter((path) => path);

    return paths.map((path, index) => {
      const product = productsData.find(
        (product) => product.id === parseInt(path)
      );

      return {
        path: `/${paths.slice(0, index + 1).join("/")}`,
        label: product ? product.title : path.charAt(0).toUpperCase() + path.slice(1),
      };
    });
  }, [location]);

  return (
    <BreadcrumbsContext.Provider value={breadcrumbs}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};

export const useBreadcrumbs = () => {
  return useContext(BreadcrumbsContext);
};
