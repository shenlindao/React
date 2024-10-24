import React from "react";
import menuItems from "../data/menu";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const CategoryTitle = ({ title }) => (
  <div className="header__block1__search__details__title">
    <Link to="#">{title}</Link>
  </div>
);

const CategoryList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        <Link to="#">{item}</Link>
      </li>
    ))}
  </ul>
);

const Browse = () => {
  const filteredItems = menuItems.filter(
    (item) => item.title === "women" || item.title === "men"
  );

  return (
    <details>
      <summary className="header__block1__search__browse">
        Browse&nbsp;
        <div className="header__block1__search__browse__icon">
          <FontAwesomeIcon icon={faCaretDown} aria-hidden="true" />
        </div>
      </summary>
      <div className="header__block1__search__details">
        {filteredItems.map((item, index) => (
          <div key={index}>
            <CategoryTitle
              title={item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            />
            <CategoryList items={item.submenu} />
          </div>
        ))}
      </div>
    </details>
  );
};

export default Browse;
