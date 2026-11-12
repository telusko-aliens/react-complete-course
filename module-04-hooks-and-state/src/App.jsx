import "./App.css";

function App() {
  let counter = 0;
  function handleValue() {
    counter = counter + 1;
    console.log(counter);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleValue}>Increase</button>
    </>
  );
}

export default App;
