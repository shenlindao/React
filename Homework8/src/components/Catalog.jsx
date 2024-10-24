import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import productsData from "../data/products";
import cartIMG from "../assets/img/icons/cart.svg";

const Catalog = () => {
  const dispatch = useDispatch();
  const selectedSizes = useSelector((state) => state.filters.selectedSizes);

  const handleAddToCart = (item) => {
    dispatch(
      addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        imgSrc: item.imgSrc,
        color: item.color,
        size: item.sizes[0],
        quantity: 1,
      })
    );
  };

  const filteredProducts = selectedSizes.length
    ? productsData.filter((item) =>
        item.sizes.some((size) => selectedSizes.includes(size))
      )
    : productsData;

  return (
    <div className="wrap">
      <div className="catalog">
        <div className="catalog__items">
          {filteredProducts.map((item, index) => (
            <div key={index} className="catalog__items__item">
              <div className="catalog__items__item__hover_bg">
                <button
                  className="catalog__items__item__hover_bg__add_to_cart"
                  onClick={() => handleAddToCart(item)}
                >
                  <img src={cartIMG} alt="cart" />
                  <span>Add to&nbsp;Cart</span>
                </button>
              </div>
              <img
                src={item.imgSrc}
                className="catalog__items__item__img"
                alt={item.title}
                title={item.title}
              />
              <div className="catalog__items__item__content">
                <div className="catalog__items__item__title">{item.title}</div>
                <div className="catalog__items__item__price">{`$${item.price.toFixed(
                  2
                )}`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
