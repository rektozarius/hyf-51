import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  // Checks if calculated count is lower than 0
  const countChanger = (number) => {
    const nextCount = count + number;
    if (nextCount < 0) {
      setCount(0);
    } else {
      setCount(nextCount);
    };
  };

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <div>
        <Count count={count}/>
      </div>
      <div>
        <Button onClick={() => countChanger(2)}>+2</Button>
        <Button onClick={() => countChanger(1)}>+1</Button>
        <Button onClick={() => countChanger(-1)}>-1</Button>
        <Button onClick={() => countChanger(-2)}>-2</Button>
      </div>
      <div>
        {feedback}
      </div>
    </div>
  );
};

function Count({count}) {
  return (
    <div>
      {count}
    </div>
  );
};

function Button({onClick, children}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default App;
