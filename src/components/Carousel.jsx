import React from "react";
import "../style/Carousel.css";
import { useEffect, useState } from "react";

const Carousel = (props) => {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
      </div>
      <span className="material-symbols-outlined prev" onClick={prev}>
        arrow_back_ios
      </span>
      <span className="material-symbols-outlined next" onClick={next}>
        arrow_forward_ios
      </span>
      <p className="current-page">
        {currentIndex + 1}/{children.length}
      </p>
    </div>
  );
};

export default Carousel;
