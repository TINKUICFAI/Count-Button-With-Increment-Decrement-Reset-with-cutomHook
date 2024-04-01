function Button({ increment, decrement, reset }) {
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default Button;
