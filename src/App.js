import { useState, useTransition } from 'react';
import './App.css';

function App() {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const [isPending, startTransition] = useTransition();
  const [count, setCount]= useState(0)

  /*
  //hmmm
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const getCountUpdate = async (prevState) => {
    await sleep(2000);
    return prevState+1;
  }
  */


  const clickHandler = (e) => {
    
    setCount(prevState=>{
      setCount(prevState+1);
    });

    startTransition(()=>{
      setHasBeenClicked(true);
    })
  }


  return (
    <div className="App">
      <section>
        <h1>React useTransition hook example</h1>
        {isPending ? <p>Loading...</p> : <p>Button {hasBeenClicked ? 'has' : 'has not'} been clicked</p>}
        <p>Button has been clicked {count} times.</p>
        <button onClick={clickHandler} disabled={isPending}>Click Me</button>
      </section>
    </div>
  );
}

export default App;
