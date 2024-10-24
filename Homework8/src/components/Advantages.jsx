import React from 'react';
import advantagesData from "../data/advantages"

const Advantages = () => {
    return (
        <div className="advantages mb-100">
            <div className="advantages__img">
                <div className="advantages__img__flag">
                    <div className="advantages__img__flag__text">30%&nbsp;<span className="advantages__img__flag__text__color">offer</span><br />
                        <span className="advantages__img__flag__text__cat-name">for women</span>
                    </div>
                </div>
            </div>
            <div className="advantages__blocks">
                {advantagesData.map((advantage, index) => (
                    <div key={index} className="advantages__blocks__block">
                        <div className="advantages__blocks__block__img">
                            <img src={advantage.imgSrc} alt={advantage.title} />
                        </div>
                        <div className="advantages__blocks__block__left">
                            <div className="advantages__blocks__block__left__title">{advantage.title}</div>
                            <div className="advantages__blocks__block__left__text">{advantage.text}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Advantages;
