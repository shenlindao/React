import React from "react";
import categoriesData from "../data/categories";

const Categories = () => {
  return (
    <div class="wrap">
      <div className="categories">
        {categoriesData.map((category, index) => (
          <a key={index} href={category.href} className={`${category.class}`}>
            <img src={category.imgSrc} alt={category.class} />
            <div className="categories__flag">
              <div className="categories__flag__text">
                {category.flagText}
                <br />
                <span className="categories__flag__text__cat-name">
                  {category.catName}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Categories;
