import { useState } from "react";
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

  if (addValue === 20) {
  }
  return (
    <div>
      <h1>hello Naksh</h1>
      <Newname />
      <h1>this is New react</h1>
      <h2>counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </div>
  );
}

export default App;
