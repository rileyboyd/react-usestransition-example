import { Suspense, useState, useTransition } from "react";
import "./App.css";

function App() {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const getNewCount = async () => {
    return "abc";
  };

  const clickHandler = async (e) => {
    // startTransition(async () => {
    await new Promise((r) => setTimeout(r, 2000));
    setHasBeenClicked(true);
    // });
  };

  return (
    <div className="App">
      <section>
        <h1>React useTransition hook example</h1>

        <Suspense fallback={<p>Loading...</p>}>
          <p>Button {hasBeenClicked ? "has" : "has not"} been clicked</p>
        </Suspense>
        <p>Button has been clicked {count} times.</p>
        <button onClick={clickHandler} disabled={isPending}>
          Click Me
        </button>
      </section>
    </div>
  );
}

export default App;
