import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Oops! Page Not Found.</p>
      <p className="not-found__description">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="catalog__button">
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
