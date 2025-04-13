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

  const countPlusOne = () => {
    setCount(count + 1);
  };

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <div>
        <Count count={count}/>
      </div>
      <div>
        <Button onClick={countPlusOne}/>
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

function Button({onClick}) {
  return (
    <button onClick={onClick}>
      Add 1!
    </button>
  );
};

export default App;
