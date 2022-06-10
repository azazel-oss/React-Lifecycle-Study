import Counter from "./Counter";
import { useState } from "react";

function App() {
  const [mount, setMount] = useState(true);
  const [randomProp, setRandomProp] = useState(0);
  const [seed, setSeed] = useState(50);
  function mountCounter() {
    setMount(true);
  }
  function unmountCounter() {
    setMount(false);
  }
  function ignoreProp() {
    setRandomProp(Math.random());
  }
  function seedGenerator() {
    setSeed(Math.floor(Math.random() * 100));
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
      <button onClick={seedGenerator}>Generate new Seed</button>
      <div>{mount && <Counter ignoreProp={randomProp} seed={seed} />}</div>
    </div>
  );
}

export default App;
