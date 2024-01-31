import { useState } from "react";
import "./index.css";
import Newname from "./Newname";
function App() {
  let [counter, setCounter] = useState(10);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 2);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 2);
    }
  };
  return (
    <div className="container mx-auto mt-10 p-5 bg-cyan-100 rounded-lg shadow-md flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-5 bg-yellow-200">Hello Naksh</h1>
      <Newname />
      <h1 className="text-xl font-semibold mb-3 bg-blue-200">
        This is a New React App
      </h1>
      <h2 className="text-2xl mb-3">Counter Value: {counter}</h2>
      <div className="flex items-center">
        <div className="mr-3">
          <button
            onClick={addValue}
            className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md"
          >
            Add Value
          </button>
        </div>
        <div>
          <button
            onClick={removeValue}
            className="py-2 px-4 bg-red-500 text-white rounded-md shadow-md"
          >
            Remove Value
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
