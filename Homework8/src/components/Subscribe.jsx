import React from 'react';
import faceIMG from '../assets/img/subscribe/face.png';

const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="wrap">
                <div className="subscribe__block1">
                    <img src={faceIMG} alt="subscribe_face" className="subscribe__block1__img" />
                    <div className="subscribe__block1__left">
                        <div className="subscribe__block1__text">
                            &laquo;Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium&raquo;
                        </div>
                        <div className="subscribe__block1__name">Bin Burhan</div>
                        <div className="subscribe__block1__city">Dhaka, Bd</div>
                        <div className="subscribe__block1__pagination">
                            <div className="subscribe__block1__pagination__item"></div>
                            <div className="subscribe__block1__pagination__item active"></div>
                            <div className="subscribe__block1__pagination__item"></div>
                        </div>
                    </div>
                </div>
                <div className="subscribe__line"></div>
                <div className="subscribe__block2">
                    <div className="subscribe__block2__text"><span>SUBSCRIBE</span> <br />FOR OUR NEWSLETTER AND PROMOTION</div>
                    <form action="#" className="subscribe__block2__inp">
                        <input type="text" className="subscribe__block2__inp__input" placeholder="Enter Your Email" />
                        <button className="subscribe__block2__inp__button">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;