import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from './components/NotFound';
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";
import ScrollToTop from "./components/ScrollToTop";
import { BreadcrumbsProvider } from "./components/BreadcrumbsContext";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <BreadcrumbsProvider>
        <Layout>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </Layout>
      </BreadcrumbsProvider>
    </Router>
  );
};

export default App;
