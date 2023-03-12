import "./App.css";
import imagen from "../../assets/papasitzel.png";
import Carousel from "../Carousel";
import TextReader from "../TextReader";
import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("");
  const text =
    "Era un bonito día en la casa de la familia de Itzel, una linda y alegre niña de 7 años. Su papá don Jorge y su mamá doña Isabel desayunaban alrededor de la mesa, mientras que Itzel platicaba con su hermana mayor llamada Montse, al mismo tiempo que se preparaba para ir a la escuela.";

  const changeBgColor = (newBgColor: string) => {
    setBgColor(newBgColor);
  };
  return (
    <div className="h-screen flex flex-col">
      <div className="h-5/6 flex flex-row p-1 bg-[#f5d7b0]">
        <div className="flex-1 flex text-center items-center p-10 font-sans font-bold text-2xl">
          <p style={{ backgroundColor: bgColor }}>{text}</p>
        </div>
        <div
          className="bg-contain bg-center bg-no-repeat flex-1"
          style={{
            backgroundImage: `url(${imagen})`,
          }}
        ></div>
      </div>
      <div className="h-1/6 flex w-full">
        <TextReader text={text} onBgChange={changeBgColor} />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
