import pagina2 from "../assets/pagina2.png";
import pagina3 from "../assets/pagina3.png";
import pagina4 from "../assets/pagina4.png";
import pagina5 from "../assets/pagina5.png";
import pagina9 from "../assets/pagina9.png";
import pagina10 from "../assets/pagina10.png";
import pagina11 from "../assets/pagina11.png";
import pagina12 from "../assets/pagina12.png";
import pagina13 from "../assets/pagina13.png";
import pagina16 from "../assets/pagina16.png";
import pagina17 from "../assets/pagina17.png";
import pagina20 from "../assets/pagina20.png";
import pagina23 from "../assets/pagina23.png";
import pagina24 from "../assets/pagina24.png";
import pagina27 from "../assets/pagina27.png";

import TextReader from "./TextReader";
import TextImage from "./TextImage";
import { useState } from "react";

interface StoryProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  sliderRef: any;
  changeCarrousel: (index: number) => void;
}

function Story({
  currentPage,
  setCurrentPage,
  sliderRef,
  changeCarrousel,
}: StoryProps) {
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
      specialText: "",
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
      specialText: "",
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
      specialText: "",
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
      specialText: "",
      image: pagina4,
      voice: 1,
    },
    {
      pageNumber: 5,
      text: "",
      specialText: `¿Debería Itzel utilizar una llave para
          abrir la puerta de la confianza a su hermana
          mayor, que la quiere mucho? o ¿Debe
          poner un candado para cerrar el paso a la
          comunicación con Montse?`,
      image: pagina5,
      voice: 1,
    },
    {
      pageNumber: 6,
      text: `¡Itzel debe usar su llave de la confianza y contarle a su hermana
          qué es eso que le está preocupando al ir a la escuela! Porque
          Montse es una persona de confianza, ayuda a su hermanita
          siempre que puede y le ha demostrado que la quiere mucho.
          Itzel le contó a su hermana, que Juan, le hacía sentir mal
          cuando se encontraban en la escuela porque se reía de ella
          cuando nadie los veía.
          Montse le agradeció su confianza y le aconsejó que también
          se lo contara a sus papás, ya que ellos como los adultos de la
          familia, tienen la responsabilidad de ayudar a Itzel y hacer lo
          necesario para que su compañero ya no la molestara.`,
      specialText: "",
      voice: 0,
    },
    {
      pageNumber: 7,
      text: `Ya en la escuela Itzel se encontró en el recreo a Juan, que
          se paró frente a ella cerrándole el paso mientras le decía
          a la niña:
          - Itzel ¡Qué fea te ves! Mejor regresa a tu casa porque si te
          veo en el salón después del recreo te voy a pegar-`,
      specialText: "",
      voice: 1,
    },
    {
      pageNumber: 8,
      text: "",
      specialText: `¿Itzel debería utilizar la llave de la confianza para hacer
          lo que le pide su compañero que la molesta? o ¿Debe utilizar
          el candado para cerrarle el paso a Juan y pedir ayuda a una
          persona adulta?`,
      voice: 1,
    },
    {
      pageNumber: 9,
      text: `Juan no tiene derecho
          de hablar de una forma
          que haga sentir mal
          a su compañera, por
          eso ¡Itzel debe utilizar
          su candado para
          cerrar el paso a esos
          comentarios y avisarle
          a una persona de
          confianza para que la
          ayuden!
          `,
      specialText: ``,
      image: pagina9,
      voice: 0,
    },
    {
      pageNumber: 10,
      text: `Itzel le contó a su maestro Enrique lo que estaba
          pasando con Juan y lo mal que eso la hacía sentir.
          Después del recreo, el maestro Enrique
          habló con Juan sobre la importancia del
          respeto y le preguntó al niño:
          ¿Cómo te sentirías si
          alguien te molestara?`,
      specialText: ``,
      image: pagina10,
      voice: 0,
    },
    {
      pageNumber: 11,
      text: `Juan respondió que se sentiría triste, preocupado
          y ¡Con miedo!
          Al pensar lo que podía sentir, Juan le pidió disculpas a Itzel,
          después el maestro Enrique habló de esta situación con la
          mamá y el papá de Juan para que también ayudaran al niño
          a respetar a sus compañeras y compañeros.`,
      specialText: ``,
      image: pagina11,
      voice: 0,
    },
    {
      pageNumber: 12,
      text: `Al terminar las clases y mientras esperaba a su mamá,
          don Chepo se acercó a Itzel para ofrecerle un helado
          mientras le decía:
          -Hola nenita ¿Cómo estás? Me parece
          que hoy es tu día de suerte.
          -Hola ¿Por qué dice que es mi día de
          suerte? ¡A mi me gustan las sorpresas!
          A Itzel le pareció agradable que don
          Chepo le hablara con palabras bonitas
          y sintió mucha curiosidad por saber qué
          quería decir.`,
      specialText: ``,
      image: pagina12,
      voice: 0,
    },
    {
      pageNumber: 13,
      text: `-Don Chepo le sonrió y le dijo que ella
          le caía muy bien y que por eso podría
          regalarle un helado todos los días, pero
          sólo si ella lo acompañaba a su casa para
          platicar sin que nadie los viera ni lo supiera.
          Mientras decía esto, don Chepo pensaba
          que sería muy fácil engañar a la niña
          para llevarla a su casa y abrazarla,
          aunque a ella no le gustara.
          Itzel sentía que algo no estaba bien,
          pero también pensaba que no podía ser
          que un señor que le hablaba tan bonito
          quisiera hacerle daño.`,
      specialText: ``,
      image: pagina13,
      voice: 0,
    },
    {
      pageNumber: 14,
      text: ``,
      specialText: `¿Itzel debería utilizar su llave para abrir la puerta de
          la confianza y aceptar la invitación para hablar de algo a
          escondidas? o ¿Debe rechazar esa invitación con su candado?`,
      voice: 1,
    },
    {
      pageNumber: 15,
      text: `¡Itzel debe usar su candado y cerrar la puerta a esta
          situación, porque, aunque él fue muy amable y prometió
          regalarle algo, ella no lo conoce y él le pide guardar un
          secreto! Además, no es una persona de confianza para
          aceptar su invitación.
          Itzel decidió negarse a la invitación de don Chepo, se alejó de
          él y esperó dentro de la escuela y a la vista de sus maestros.`,
      specialText: ``,
      voice: 0,
    },
    {
      pageNumber: 16,
      text: `Cuando su mamá llegó por ella, Itzel le contó lo que le había
          sucedido con don Chepo y ella avisó a las autoridades de la
          escuela sobre el peligro de que una persona conocida haya
          invitado a Itzel a su casa.
          Eso ayudó a que otras niñas y niños se pusieran a salvo.`,
      specialText: ``,
      image: pagina16,
      voice: 0,
    },
    {
      pageNumber: 17,
      text: ``,
      specialText: ``,
      image: pagina17,
      voice: 0,
    },
    {
      pageNumber: 18,
      text: `Al llegar a su casa, Itzel almorzó con su familia algo que con
          mucho cariño habían cocinado para ella y se acabó toda la
          comida.
          Después, don Jorge el papá de Itzel dijo lo siguiente:
          -Tengo que salir a comprar, mientras tanto ustedes irán de
          visita con su mamá a la casa del tío Pancho y la tía Mari.
          - ¡Me encanta visitar a los tíos, porque juego con mis
          primas y nos divertimos mucho corriendo por todo su
          jardín! - Dijo Itzel muy emocionada y feliz.
          Cuando Itzel y su hermana llegaron a casa de su tío,
          saludaron al entrar y enseguida corrieron en busca de sus
          primas para jugar y así lo hicieron hasta que llegó la hora
          de descansar. 
          `,
      specialText: ``,
      voice: 0,
    },
    {
      pageNumber: 19,
      text: `Las primas se fueron a dormir un rato, mientras que Itzel
          y su hermana se quedaron mirando la televisión junto al
          tío Pancho en el sillón y la tía Mari se quedó platicando
          en la sala con la mamá de Itzel.
          Pasó un rato y el sueño terminó por vencer a Montse; de
          pronto, el tío Pancho comenzó a acariciar a Itzel de una
          forma que a ella le hacía sentir mal e incómoda mientras
          le decía que era un juego y que al final se ganaría un
          regalo si guardaba el secreto.`,
      specialText: ``,
      voice: 0,
    },
    {
      pageNumber: 20,
      text: ``,
      specialText: ``,
      image: pagina20,
      voice: 0,
    },
    {
      pageNumber: 21,
      text: ``,
      specialText: `¿Itzel debe utilizar su llave y abrir la puerta para
          permitir que su tío la acaricie, aunque esta situación no
          le guste y la haga sentir mal? o ¿Debe utilizar su candado
          para cerrar la puerta y rechazar ese momento que no le
          agrada?`,
      voice: 1,
    },
    {
      pageNumber: 22,
      text: `Ninguna persona, aunque sea un familiar tuyo, puede
          pedirte que le dejes tocar tus partes privadas o alguna
          parte de tu cuerpo que te haga sentir incómoda, por eso
          ¡Itzel debe utilizar su candado y cerrar la puerta a esta
          situación en la que no están respetando su cuerpo!
          `,
      specialText: ``,
      voice: 0,
    },
    {
      pageNumber: 23,
      text: `Itzel se levantó del sillón y fue en busca de sus personas
          de confianza, por lo que despertó a su hermana Montse,
          le contó lo sucedido y corrieron para avisarle a su mamá.
          Los papás de Itzel avisaron a las autoridades sobre lo
          que su tío Pancho había hecho y pusieron a salvo a Itzel.
          `,
      specialText: ``,
      image: pagina23,
      voice: 0,
    },
    {
      pageNumber: 24,
      text: `Esa misma noche, durante la cena, doña Isabel le dijo a Itzel:
          -Quiero felicitarte porque has sido muy valiente,
          estuviste en situaciones de riesgo y supiste cómo
          ponerte a salvo, estás creciendo y cada día
          aprendes a hacer muchas cosas por ti misma,
          también estás aprendiendo que hay
          situaciones en las que necesitas
          ayuda de las personas que
          te queremos y que somos
          tus personas
          de confianza
          `,
      specialText: ``,
      image: pagina24,
      voice: 0,
    },
    {
      pageNumber: 25,
      text: `Itzel se puso feliz al saber que estaba creciendo y que
          cada día aprendía cosas nuevas para protegerse. De
          pronto le surgió una duda y preguntó preocupada:
          -¿Qué hago si estoy en una situación de riesgo y ustedes
          no están cerca?
          Su hermana mayor le respondió:
          -Hay un número al que puedes hablar, es para momentos
          en los que tengas una emergencia, sólo marca al 911
          desde donde sea que estés, no importa el lugar, las
          personas que te contesten te pueden ayuda
          `,
      specialText: ``,
      voice: 0,
    },
    {
      pageNumber: 26,
      text: `El papá de Itzel dijo: -También puedes pedir ayuda a un
          adulto, aunque sea la persona de confianza de otro de tus
          amigos o amigasDespués de eso, don Jorge y doña Isabel abrazaron a sus dos
          hijas. Itzel se sentía llena del amor de su familia y pensaba en
          la importancia de conocer los números para llamar por alguna
          situación de riesgo (911), también pensó en lo bueno que es
          conocer a gente a las que se les puede pedir ayuda, como son
          los maestros, la policía, sus amigos o amigas y su familia.
          Esa noche, antes de dormir, Itzel se prometió a sí misma
          que le contaría a todos sus amigos y amigas lo que estaba
          pensando, ya que no tenía dudas de haber aprendido que:
          
          `,
      specialText: ``,
      voice: 0,
    },
    {
      pageNumber: 27,
      text: `¡De Boca en Boca, a mi Cuerpo Nadie lo Toca!`,
      specialText: ``,
      image: pagina27,
      voice: 0,
    },
    {
      pageNumber: 28,
      text: `Fin.`,
      specialText: ``,
      voice: 0,
    },
  ];
  const [bgColor, setBgColor] = useState("");
  // const [currentPage, setCurrentPage] = useState(0);

  const changeBgColor = (newBgColor: string) => {
    setBgColor(newBgColor);
  };
  return (
    <>
      <a href="https://app.prevencionamigable.com.mx/juegos/otros/games.html">
        <div className="w-full flex justify-end my-auto">
          <div className="flex items-center justify-center absolute w-12 h-12 rounded-full bg-green-500 text-black font-semibold">
            <span className="material-icons">home</span>
          </div>
        </div>
      </a>
      <TextImage
        pageData={pageDataArray[currentPage]}
        arrayLength={pageDataArray.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        bgColor={bgColor}
        sliderRef={sliderRef}
        changeCarrousel={changeCarrousel}
      ></TextImage>
      <TextReader
        text={
          pageDataArray[currentPage].heading
            ? pageDataArray[currentPage].heading +
              pageDataArray[currentPage].text +
              pageDataArray[currentPage].specialText
            : pageDataArray[currentPage].text +
              pageDataArray[currentPage].specialText
        }
        onBgChange={changeBgColor}
        currentPage={pageDataArray[currentPage].pageNumber}
        voice={pageDataArray[currentPage].voice}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default Story;
