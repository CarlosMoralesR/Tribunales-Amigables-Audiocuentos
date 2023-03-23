import papasitzel from "../../assets/papasitzel.png";
import herramientas from "../../assets/herramientas.png";
import intro from "../../assets/intro.png";
import "./App.css";
import Carousel from "../Carousel";
import TextReader from "../TextReader";
import TextImage from "../TextImage";
import { useState } from "react";

function App() {
  const pageDataArray = [
    {
      pageNumber: 1,
      text: `¡Hola amiguitas y amiguitos!
      Esta es la historia de lo que un día le pasó a Itzel, ella quiere
      contársela a todas las niñas y niños, para que al igual que
      ella, sepan cómo protegerse con la ayuda de las personas de
      su confianza y cuidarse de las personas que pueden hacerles
      daño, ya que aprendió que: ¡De Boca en Boca, a Mi Cuerpo
      Nadie lo Toca!.
      Para poder leer este cuento, es importante que Itzel les
      comparta algo muy importante que sus papás le enseñaron:
      existen dos herramientas de protección y cuidado para los niños
      y las niñas, son materiales que no pueden tocarse porque están
      en nuestra imaginación pero que nos alejan de situaciones que
      pueden ponernos en peligro o ayudarnos a estar a salvo.`,
      image: papasitzel,
    },
    {
      pageNumber: 2,
      text: "Esta es la página 2",
      image: herramientas,
    },
    {
      pageNumber: 3,
      text: "Esta es la página 3",
      image: intro,
    },
  ];
  const [bgColor, setBgColor] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const changeBgColor = (newBgColor: string) => {
    setBgColor(newBgColor);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="h-5/6 flex flex-col p-1 bg-[#f5d7b0]">
        <TextImage
          pageData={pageDataArray[currentPage]}
          arrayLength={pageDataArray.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          bgColor={bgColor}
        ></TextImage>
        <TextReader
          text={pageDataArray[currentPage].text}
          onBgChange={changeBgColor}
        />
      </div>
      <div className="h-1/6 flex bg-gray-50">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
