import { useState } from 'react';
import './App.css';
import Button from './components/Button.jsx';

function App() {
  const handleCount = (iniVal) => {
    const [count, setCount] = useState(iniVal);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    const reset = () => {
      setCount(iniVal);
    };

    return { count, increment, decrement, reset };
  };

  let { count, increment, decrement, reset } = handleCount(0);

  return (
    <>
      <h1>count:{count}</h1>
      <Button increment={increment} decrement={decrement} reset={reset} />
    </>
  );
}

export default App;
