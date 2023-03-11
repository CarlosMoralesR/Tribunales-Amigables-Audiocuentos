import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";
import { useState } from "react";

export const CenterMode = () => {
  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div style={{ width: "100%" }}>
      <header>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </header>
      <button onClick={sliderRef?.slickPrev}>
        <span className="material-icons">chevron_left</span>
      </button>
      <button onClick={sliderRef?.slickNext}>
        <span className="material-icons">chevron_right</span>
      </button>
      <Slider ref={setSliderRef} {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
