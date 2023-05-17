import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";
import { useState } from "react";
import { useRef } from 'react';
import imagen from "../../assets/intro.png";
import Pag1 from "../../assets/Pag1.png"
import Pag2 from "../../assets/Pag2.png"
import Pag3 from "../../assets/Pag3.png"
import Pag4 from "../../assets/Pag4.png"
import Pag5 from "../../assets/Pag5.png"
import Pag6 from "../../assets/Pag6.png"
import Pag7 from "../../assets/Pag7.png"
import Pag8 from "../../assets/Pag8.png"
import Pag9 from "../../assets/Pag9.png"
import Pag10 from "../../assets/Pag10.png"
import Pag11 from "../../assets/Pag11.png"
import Pag12 from "../../assets/Pag12.png"
import Pag13 from "../../assets/Pag13.png"
import Pag14 from "../../assets/Pag14.png"
import Pag15 from "../../assets/Pag15.png"
import Pag16 from "../../assets/Pag16.png"
import Pag17 from "../../assets/Pag17.png"
import Pag18 from "../../assets/Pag18.png"
import Pag19 from "../../assets/Pag19.png"
import Pag20 from "../../assets/Pag20.png"
import Pag21 from "../../assets/Pag21.png"
import Pag22 from "../../assets/Pag22.png"
import Pag23 from "../../assets/Pag23.png"
import Pag24 from "../../assets/Pag24.png"
import Pag25 from "../../assets/Pag25.png"
import Pag26 from "../../assets/Pag26.png"
import Pag27 from "../../assets/Pag27.png"
import Pag28 from "../../assets/Pag28.png"
import Story from "../Story"

interface CenterModeProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  sliderRef: any;
  changeCarrousel: (index: number) => void;
}

export const CenterMode = ({
  currentPage,
  setCurrentPage,
  sliderRef,
  changeCarrousel
}: CenterModeProps) => {
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
  // const [sliderRef, setSliderRef] = useState<any>(null);
  const numberPages = [1, 2, 3, 4, 5, 6, 7, 8, 9,  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
    const [activeSlider, setActiveSlider] = useState(0);

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
          <Slider ref={sliderRef} {...settings} >
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag1} onClick={() => {setCurrentPage(0)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag2} onClick={() => {setCurrentPage(1)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag3} onClick={() => {setCurrentPage(2)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag4} onClick={() => {setCurrentPage(3)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag5} onClick={() => {setCurrentPage(4)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag6} onClick={() => {setCurrentPage(5)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag7} onClick={() => {setCurrentPage(6)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag8} onClick={() => {setCurrentPage(7)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag9} onClick={() => {setCurrentPage(8)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag10} onClick={() => {setCurrentPage(9)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag11} onClick={() => {setCurrentPage(10)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag12} onClick={() => {setCurrentPage(11)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag13} onClick={() => {setCurrentPage(12)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag14} onClick={() => {setCurrentPage(13)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag15} onClick={() => {setCurrentPage(14)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag16} onClick={() => {setCurrentPage(15)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag17} onClick={() => {setCurrentPage(16)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag18} onClick={() => {setCurrentPage(17)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag19} onClick={() => {setCurrentPage(18)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag20} onClick={() => {setCurrentPage(19)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag21} onClick={() => {setCurrentPage(20)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag22} onClick={() => {setCurrentPage(21)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag23} onClick={() => {setCurrentPage(22)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag24} onClick={() => {setCurrentPage(23)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag25} onClick={() => {setCurrentPage(24)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag26} onClick={() => {setCurrentPage(25)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag27} onClick={() => {setCurrentPage(26)}} alt="" />
            </div>
            <div className={`w-full h-full`}>
              <img className="w-3/6 h-1/2 mx-auto" src={Pag28} onClick={() => {setCurrentPage(27)}} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
