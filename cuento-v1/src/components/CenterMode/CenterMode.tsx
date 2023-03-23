import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";
import { useState } from "react";
import imagen from "../../assets/intro.png";
import imagen2 from "../../assets/herramientas.png";

export const CenterMode = () => {
  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    // variableWidth: true,
  };
  const [sliderRef, setSliderRef] = useState<any>(null);

  return (
    // si se quita el h-full se ve toda la imagen
    <div className="w-full h-full">
      <header>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </header>
      <div className="relative" style={{ height: "100%" }}>
        <div className="w-full h-full hover:cursor-pointer">
          <Slider ref={setSliderRef} {...settings}>
            {/* para el otro tamaño que es mas grande, quitarle las clases a la imagen */}
            <div className="w-full h-full">
              <img className="w-3/6 h-1/2 mx-auto" src={imagen} alt="" />
            </div>
            <div className="w-full h-full">
              <img className="w-3/6 h-1/2 mx-auto" src={imagen2} alt="" />
            </div>
            <div className="w-full h-full">
              <img className="w-3/6 h-1/2 mx-auto" src={imagen} alt="" />
            </div>
            <div className="w-full h-full">
              <img className="w-3/6 h-1/2 mx-auto" src={imagen2} alt="" />
            </div>
            <div className="w-full h-full">
              <img className="w-3/6 h-1/2 mx-auto" src={imagen} alt="" />
            </div>
            <div className="w-full h-full">
              <img className="w-3/6 h-1/2 mx-auto" src={imagen2} alt="" />
            </div>
          </Slider>
        </div>
        <button
          onClick={sliderRef?.slickPrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-sm bg-blue-100 hover:bg-blue-200 hover:shadow-lg"
        >
          <span className="material-icons">chevron_left</span>
        </button>
        <button
          onClick={sliderRef?.slickNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-sm bg-blue-100 hover:bg-blue-200 hover:shadow-lg"
        >
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
    </div>
  );
};
