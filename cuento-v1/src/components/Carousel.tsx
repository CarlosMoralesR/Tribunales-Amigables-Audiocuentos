import { useState } from "react";
import { CenterMode } from "./CenterMode/CenterMode.js";

function Carousel() {
  return (
    <div className="h-full w-11/12 flex justify-center">
      <CenterMode></CenterMode>
    </div>
  );
}

export default Carousel;
