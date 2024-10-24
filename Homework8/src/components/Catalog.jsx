import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import productsData from "../data/products";
import cartIMG from "../assets/img/icons/cart.svg";

const Catalog = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(
      addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        imgSrc: item.imgSrc,
        color: item.color,
        size: item.size,
        quantity: 1,
      })
    );
  };

  return (
    <div className="wrap">
      <div className="catalog">
        <div className="catalog__title">Featured Items</div>
        <div className="catalog__subtitle">
          Shop for items based on what we featured this week
        </div>
        <div className="catalog__items">
          {productsData.map((item, index) => (
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
        <Link to="./pages/catalog.html" className="catalog__button">
          Browse All Product&nbsp;&nbsp;
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
