interface TextImageProps {
  pageData: any;
  arrayLength: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  bgColor: string;
  sliderRef: any;
  changeCarrousel: (index: number) => void;
}

function TextImage({
  pageData,
  arrayLength,
  currentPage,
  setCurrentPage,
  bgColor,
  sliderRef,
  changeCarrousel,
}: TextImageProps) {
  const { text, image } = pageData;

  return (
    <div className="flex flex-row h-5/6">
      <button
        // funcionalidad para que se vaya a la ultima pagina al estar en la primera
        // onClick={() => {
        //   setCurrentPage((currentPage - 1 + arrayLength) % arrayLength);
        // }}
        onClick={() => {
          if (currentPage !== 0) {
            setCurrentPage(currentPage - 1);
            changeCarrousel(currentPage - 1);
          }
        }}
        disabled={currentPage === 0}
        className={`absolute top-1/3 h-24 left-0 transform -translate-y-1/2 rounded-sm bg-red-400 ${
          currentPage === 0
            ? "cursor-not-allowed disabled"
            : "hover:bg-red-500 hover:shadow-lg"
        }`}
      >
        <span className="material-icons text-white">chevron_left</span>
      </button>

      {text || pageData.specialText ? (
        <div className="w-full flex-1 flex flex-col items-center justify-center text-center p-8 font-sans font-bold text-2xl">
          <div>
            {pageData.heading ? (
              <h1
                className="text-blue-400 p-2"
                style={{ backgroundColor: bgColor }}
              >
                {pageData.heading}{" "}
              </h1>
            ) : (
              ""
            )}
          </div>
          {pageData.specialText ? (
            <div>
              <h1
                className="text-blue-800 p-2"
                style={{ backgroundColor: bgColor }}
              >
                <span className="material-icons text-blue-700">warning</span>
                {pageData.specialText}{" "}
              </h1>
            </div>
          ) : (
            ""
          )}
          <div className="overflow-auto">
            <p
              className={`w-full h-full text-sm overflow-auto md:text-base lg:text-lg xl:text-xl  ${
                image ? "xl:text-xl" : "xl:text-2xl"
              }`}
              style={{ backgroundColor: bgColor }}
            >
              {text}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      {image ? (
        <div className="w-full h-full bg-contain bg-center bg-no-repeat flex flex-1 justify-center items-center">
          <img
            className="object-contain h-full w-full"
            src={image}
            alt="image-cuento"
          />
        </div>
      ) : (
        ""
      )}

      <button
        // funcionalidad para que se regrese a la primera pagina al estar en la ultima
        // onClick={() => setCurrentPage((currentPage + 1) % arrayLength)}
        onClick={() => {
          if (currentPage !== arrayLength - 1) {
            setCurrentPage(currentPage + 1);
            changeCarrousel(currentPage + 1);
          }
        }}
        disabled={currentPage === arrayLength - 1}
        className={`absolute top-1/3 h-24 right-0 transform -translate-y-1/2 rounded-sm bg-red-400 ${
          currentPage === arrayLength - 1
            ? "cursor-not-allowed disabled"
            : "hover:bg-red-500 hover:shadow-lg"
        }`}
      >
        <span className="material-icons text-white">chevron_right</span>
      </button>
    </div>
  );
}

export default TextImage;
