import Counter from "./Counter";
import { useState } from "react";

function App() {
  const [mount, setMount] = useState(true);
  const [randomProp, setRandomProp] = useState(0);
  function mountCounter() {
    setMount(true);
  }
  function unmountCounter() {
    setMount(false);
  }
  function ignoreProp() {
    setRandomProp(Math.random());
  }
  return (
    <div>
      <button onClick={mountCounter} disabled={mount}>
        Mount counter
      </button>
      <button onClick={unmountCounter} disabled={!mount}>
        Unmount counter
      </button>
      <br />
      <button onClick={ignoreProp}>Ignore Prop</button>
      <div>{mount && <Counter ignoreProp={randomProp} />}</div>
    </div>
  );
}

export default App;
