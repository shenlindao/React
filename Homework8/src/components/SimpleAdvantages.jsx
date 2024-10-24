import React from "react";
import advantagesData from "../data/advantages"

const SimpleAdvantages = () => {
  return (
    <div className="simple-advantages">
      {advantagesData.map((advantage, index) => (
        <div className="simple-advantages__block" key={index}>
          <img
            src={advantage.imgSrc}
            alt={advantage.title.toLowerCase()}
            className="simple-advantages__img"
          />
          <div className="simple-advantages__title">{advantage.title}</div>
          <div className="simple-advantages__text">{advantage.text}</div>
        </div>
      ))}
    </div>
  );
};

export default SimpleAdvantages;
