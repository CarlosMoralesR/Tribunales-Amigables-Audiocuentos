import { CenterMode } from "./CenterMode/CenterMode.js";

interface CarouselProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  sliderRef: any;
  changeCarrousel: (index: number) => void;
}

function Carousel({
  currentPage,
  setCurrentPage,
  sliderRef,
  changeCarrousel
}: CarouselProps) {
  return (
    <div className="flex w-full h-full my-auto">
      <CenterMode
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      sliderRef={sliderRef}
      changeCarrousel={changeCarrousel}
      ></CenterMode>
    </div>
  );
}

export default Carousel;
