import "./App.css";
import Carousel from "../Carousel";
import Story from "../Story";
import portada from "../../assets/portada.png";
import { useState } from "react";

function App() {
  const [showStory, setShowStory] = useState(false);

  function onButtonClick() {
    setShowStory(!showStory);
  }
  return (
    <>
      {!showStory ? (
        <div className="h-screen flex flex-col justify-center items-center p-5 bg-gray-100">
          <div className="flex flex-col items-center justify-center h-full p-5 rounded-xl shadow-2xl shadow-slate-400 border-r-8 border-b-4 border-gray-300 bg-[#f5d7b0]">
            <div className="h-1/6 w-full flex flex-col justify-center items-center">
              <h1 className="text-lg md:text-2xl text-center font-bold text-blue-400">
                La llave y el candado de Itzel
              </h1>
              <h2 className="text-base md:text-lg text-center font-bold text-orange-400">
                Edición Especial
              </h2>
            </div>

            <div className="h-4/6 flex justify-center items-center">
              <img
                className="h-full w-full object-contain"
                src={portada}
                alt="La llave y el candado de Itzel"
              />
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
            <Story></Story>
          </div>
          <div className="h-1/6 flex bg-gray-50">
            <Carousel />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
