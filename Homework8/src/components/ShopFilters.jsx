import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSize } from "../redux/filtersSlice";
import productsData from "../data/products";

const ShopFilters = () => {
  const dispatch = useDispatch();
  const selectedSizes = useSelector((state) => state.filters.selectedSizes);

  const uniqueSizes = Array.from(
    new Set(productsData.flatMap((item) => item.sizes))
  );

  const handleSizeChange = (size) => {
    dispatch(toggleSize(size));
  };

  return (
    <div className="filters shop__filters">
      <div className="filters__item">
        <div className="filters__title">Size</div>
        <div className="filters__options">
          <ul className="filter_size">
            {uniqueSizes.map((size) => (
              <li key={size}>
                <input
                  id={`size_${size}`}
                  type="checkbox"
                  checked={selectedSizes.includes(size)}
                  onChange={() => handleSizeChange(size)}
                />
                <label htmlFor={`size_${size}`}>{size}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopFilters;