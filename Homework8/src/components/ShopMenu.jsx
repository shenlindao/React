import React from "react";
import { Link } from "react-router-dom";
import sections from "../data/sections";

const ShopMenu = () => {
  return (
    <div className="shop__menu">
      <details open>
        <summary>category</summary>
        <nav>
          <ul>
            {sections.map((category, index) => (
              <li key={index}>
                <Link to="#">{category}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </details>
    </div>
  );
};

export default ShopMenu;
