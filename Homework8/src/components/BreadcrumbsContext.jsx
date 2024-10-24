import React, { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";

const BreadcrumbsContext = createContext([]);

export const BreadcrumbsProvider = ({ children }) => {
  const location = useLocation();

  const breadcrumbs = useMemo(() => {
    const paths = location.pathname.split("/").filter((path) => path);
    return paths.map((path, index) => ({
      path: `/${paths.slice(0, index + 1).join("/")}`,
      label: path.charAt(0).toUpperCase() + path.slice(1),
    }));
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
