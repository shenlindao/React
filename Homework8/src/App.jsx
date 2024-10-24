import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CatalogPage from "./pages/CatalogPage";
// import ProductPage from './pages/ProductPage';
// import OrderPage from './pages/OrderPage';
import { BreadcrumbsProvider } from "./components/BreadcrumbsContext";

const App = () => {
  return (
    <Router>
      <BreadcrumbsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            {/* 
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/order" element={<OrderPage />} />
                */}
          </Routes>
        </Layout>
      </BreadcrumbsProvider>
    </Router>
  );
};

export default App;
