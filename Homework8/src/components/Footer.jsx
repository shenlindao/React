import React from 'react';
import { Link } from "react-router-dom";
import Subscribe from './Subscribe';
import logoIMG from '../assets/img/icons/logo.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <Subscribe />
            <div className="footer__menu wrap">
                <div className="footer__menu__description">
                    <div className="footer__menu__description__title">
                        <img className="footer__menu__description__title__logo" src={logoIMG} alt="logo" />
                        <div className="footer__menu__description__title__logo-text">
                            bran<span>d</span>
                        </div>
                    </div>
                    <div className="footer__menu__description__text">
                        Objectively transition extensive data rather than cross
                        functional solutions. Monotonectally syndicate multidisciplinary materials before go forward
                        benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
                        <br /><br />
                        Efficiently plagiarize 24/365 action items and focused infomediaries.
                        Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                    </div>
                </div>
                <nav className="footer__menu__list">
                    <div className="footer__menu__list__title">company</div>
                    <Link to="/" className="footer__menu__list__link">Home</Link>
                    <Link to="/catalog" className="footer__menu__list__link">Shop</Link>
                    <Link to="#" className="footer__menu__list__link">About</Link>
                    <Link to="#" className="footer__menu__list__link">How It Works</Link>
                    <Link to="#" className="footer__menu__list__link">Contact</Link>
                </nav>
                <nav className="footer__menu__list">
                    <div className="footer__menu__list__title">information</div>
                    <Link to="#" className="footer__menu__list__link">Terms & Condition</Link>
                    <Link to="#" className="footer__menu__list__link">Privacy Policy</Link>
                    <Link to="#" className="footer__menu__list__link">How to Buy</Link>
                    <Link to="#" className="footer__menu__list__link">How to Sell</Link>
                    <Link to="#" className="footer__menu__list__link">Promotion</Link>
                </nav>
                <nav className="footer__menu__list">
                    <div className="footer__menu__list__title">shop category</div>
                    <Link to="#" className="footer__menu__list__link">Men</Link>
                    <Link to="#" className="footer__menu__list__link">Women</Link>
                    <Link to="#" className="footer__menu__list__link">Child</Link>
                    <Link to="#" className="footer__menu__list__link">Apparel</Link>
                    <Link to="#" className="footer__menu__list__link">Browse All</Link>
                </nav>
            </div>
            <div className="footer__bottom">
                <div className="wrap">
                    <div className="footer__bottom__rights">&copy;&nbsp;{currentYear} Brand All Rights Reserved.</div>
                    <div className="footer__bottom__social">
                        <Link to="#" className="footer__bottom__social__item"></Link>
                        <Link to="#" className="footer__bottom__social__item"></Link>
                        <Link to="#" className="footer__bottom__social__item"></Link>
                        <Link to="#" className="footer__bottom__social__item"></Link>
                        <Link to="#" className="footer__bottom__social__item"></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
