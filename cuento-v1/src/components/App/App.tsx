import pagina2 from "../../assets/pagina2.png";
import pagina3 from "../../assets/pagina3.png";
import pagina4 from "../../assets/pagina4.png";
import pagina5 from "../../assets/pagina5.png";

import "./App.css";
import Carousel from "../Carousel";
import TextReader from "../TextReader";
import TextImage from "../TextImage";
import { useState } from "react";

function App() {
  const pageDataArray = [
    {
      pageNumber: 1,
      heading: "¡Hola amiguitas y amiguitos!",
      text: `Esta es la historia de lo que un día le pasó a Itzel, ella quiere
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
      voice: 0,
    },
    {
      pageNumber: 2,
      heading: "¿Cuáles son esas herramientas?",
      text: `¡Son una llave y un candado!
      ¿Y para qué sirven estas herramientas? es muy
      fácil de aprender: Usamos una llave para abrir
      puertas, cuando abrimos una puerta podemos
      entrar a un lugar y quedarnos porque nos hace sentir
      cómodos, por eso, Itzel utiliza su propia llave para ponerse a salvo o
      estar en una situación que le hace sentirse a gusto.
      Usamos un candado para cerrar una puerta, para cerrar el paso
      o para alejarnos de un lugar o de personas con las que no nos
      sentimos a gusto. Por eso, Itzel utiliza su propio candado para
      ponerse a salvo del peligro.
      Ahora que ya conoces esto ¡Comencemos con el cuento!`,
      image: pagina2,
      voice: 0,
    },
    {
      pageNumber: 3,
      text: `Era un bonito día en la casa de la familia de Itzel, una linda
      y alegre niña de 7 años. Su papá don Jorge y su mamá doña
      Isabel desayunaban alrededor de la mesa, mientras que
      Itzel platicaba con su hermana mayor llamada Montse, al
      mismo tiempo que se preparaba para ir a la escuela.`,
      image: pagina3,
      voice: 0,
    },
    {
      pageNumber: 4,
      text: `-Qué bueno que siempre
      me ayudas, me explicas las
      tareas y que todos los días
      me llevas hasta la escuela-
      Dijo Itzel a su hermana
      mientras ponía cara de
      preocupación al decir estas
      últimas palabras.
      A Montse le llamó la
      atención esto último y
      por eso le preguntó a su
      hermanita:
      -¿Hay algo que te preocupe en el camino para
      ir a la escuela Itzel? Recuerda que yo te quiero
      mucho y que puedes confiar en mí`,
      image: pagina4,
      voice: 4,
    },
    {
      pageNumber: 5,
      text: `¿Debería Itzel utilizar una llave para
      abrir la puerta de la confianza a su hermana
      mayor, que la quiere mucho? o ¿Debe
      poner un candado para cerrar el paso a la
      comunicación con Montse?`,
      image: pagina5,
      voice: 9,
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
          text={
            pageDataArray[currentPage].heading
              ? pageDataArray[currentPage].heading +
                pageDataArray[currentPage].text
              : pageDataArray[currentPage].text
          }
          onBgChange={changeBgColor}
          currentPage={pageDataArray[currentPage].pageNumber}
          voice={pageDataArray[currentPage].voice}
        />
      </div>
      <div className="h-1/6 flex bg-gray-50">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
