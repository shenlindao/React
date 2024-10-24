import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logoIMG from "../assets/img/icons/logo.svg";
import Menu from "./Menu";
import Browse from "./Browse";
import HeaderCart from "./HeaderCart";

const Header = () => {
  return (
    <header>
      <div class="wrap">
        <div class="header">
          <div class="header__block1">
            <Link to="/">
              <img class="header__block1__logo" src={logoIMG} alt="logo" />
              <div class="header__block1__logo-text">
                bran<span>d</span>
              </div>
            </Link>
            <form action="#" class="header__block1__search">
              <Browse />
              <input
                type="text"
                class="header__block1__search__input"
                placeholder="Search for Item..."
              />
              <button type="submit" class="header__block1__search__button">
                <div class="header__block1__search__button__icon">
                  <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
                </div>
              </button>
            </form>
          </div>
          <div class="header__block2">
            <HeaderCart />
            <div class="header__block2__button">My Account</div>
          </div>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
