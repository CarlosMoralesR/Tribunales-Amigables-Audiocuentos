function TextImage({
  pageData,
  arrayLength,
  currentPage,
  setCurrentPage,
  bgColor,
}: any) {
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
          }
        }}
        disabled={currentPage === 0}
        className={`absolute top-1/3 left-0 transform -translate-y-1/2 rounded-sm bg-gray-400 ${
          currentPage === 0
            ? "cursor-not-allowed disabled"
            : "hover:bg-gray-500 hover:shadow-lg"
        }`}
      >
        <span className="material-icons text-white">chevron_left</span>
      </button>

      <div className="w-5/10 overflow-visible flex-1 flex text-center items-center p-10 font-sans font-bold text-2xl">
        <p className="" style={{ backgroundColor: bgColor }}>
          {text}
        </p>
      </div>
      <div className="w-5/10 bg-contain bg-center bg-no-repeat flex-1 my-auto">
        <img className="" src={image} alt="image-cuento" />
      </div>
      <button
        // funcionalidad para que se regrese a la primera pagina al estar en la ultima
        // onClick={() => setCurrentPage((currentPage + 1) % arrayLength)}
        onClick={() => {
          if (currentPage !== arrayLength - 1) {
            setCurrentPage(currentPage + 1);
          }
        }}
        disabled={currentPage === arrayLength - 1}
        className={`absolute top-1/3 right-0 transform -translate-y-1/2 rounded-sm bg-gray-400 ${
          currentPage === arrayLength - 1
            ? "cursor-not-allowed disabled"
            : "hover:bg-gray-500 hover:shadow-lg"
        }`}
      >
        <span className="material-icons text-white">chevron_right</span>
      </button>
    </div>
  );
}

export default TextImage;
