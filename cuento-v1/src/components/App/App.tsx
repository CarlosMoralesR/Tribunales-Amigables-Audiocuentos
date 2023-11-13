import "./App.css";
import Carousel from "../Carousel";
import Story from "../Story";
import portada from "../../assets/portada.png";
import { useState } from "react";
import { useRef } from "react";
import Slider from "react-slick";

function App() {
  const [showStory, setShowStory] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  function onButtonClick() {
    setShowStory(!showStory);
  }

  const sliderRef = useRef<Slider>();
  function changeCarrousel(index: number) {
    sliderRef.current!.slickGoTo(index);
    // setCurrentPage;
  }

  return (
    <>
      {!showStory ? (
        <div className="min-h-screen flex items-center justify-center p-5 bg-gray-100">
          <div className="flex flex-col items-center justify-center w-96 p-5 rounded-xl shadow-2xl shadow-slate-400 border-r-8 border-b-4 border-gray-300 bg-[#f5d7b0]">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <h1 className="text-2xl text-center font-bold text-blue-400">
                La llave y el candado de Itzel
              </h1>
              <h2 className="text-base md:text-lg text-center font-bold text-orange-400">
                Edición Especial
              </h2>
            </div>

            <div className="h-full flex flex-col justify-center items-center">
              <img
                className="h-full w-52 object-contain"
                src={portada}
                alt="La llave y el candado de Itzel"
              />
              <div className="my-5 text-center">
                <h1 className="text-sm font-semibold">
                  ¡Vamos a conocer a Itzel y lo que le ocurrió!
                </h1>
                <p className="text-sm">
                  Puedes leer el texto del cuento o si quieres puedes
                  seleccionar el botón verde para escuchar a mi amigo el
                  narrador. Si seleccionas los botones morados irás continuando
                  o regresando en el cuento. También puedes seleccionar las
                  miniaturas de las páginas para leerlas directamente.
                </p>
              </div>
            </div>

            <div className="h-1/6 w-full flex items-center justify-center">
              <button
                className="px-4 py-2 font-bold text-white bg-green-500 rounded-lg hover:bg-green-400 hover:shadow-xl"
                onClick={onButtonClick}
              >
                Leer cuento
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {showStory ? (
        <div className="h-screen flex flex-col">
          <div className="h-5/6 flex flex-col p-1 bg-[#f5d7b0]">
            <Story
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              sliderRef={sliderRef}
              changeCarrousel={changeCarrousel}
            ></Story>
          </div>
          <div className="h-1/6 flex bg-gray-50">
            <Carousel
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              sliderRef={sliderRef}
              changeCarrousel={changeCarrousel}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
