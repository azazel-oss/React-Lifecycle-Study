import Counter from "./Counter";
import { useState } from "react";

function App() {
  const [mount, setMount] = useState(true);
  function mountCounter() {
    setMount(true);
  }
  function unmountCounter() {
    setMount(false);
  }
  return (
    <div>
      <button onClick={mountCounter} disabled={mount}>
        Mount counter
      </button>
      <button onClick={unmountCounter} disabled={!mount}>
        Unmount counter
      </button>
      <div>{mount && <Counter />}</div>
    </div>
  );
}

export default App;
