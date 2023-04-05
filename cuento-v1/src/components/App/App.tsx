import "./App.css";
import Carousel from "../Carousel";
import Story from "../Story";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-5/6 flex flex-col p-1 bg-[#f5d7b0]">
        <Story></Story>
      </div>
      <div className="h-1/6 flex bg-gray-50">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
