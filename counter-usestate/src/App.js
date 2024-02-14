import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
  const [count, setCount] = useState(0);
  function handleReset() {
    setCount(0);
  }
  function handleDecrement() {
    setCount(count-1);
  }
  function handleIncrement() {
    setCount(count+1);
  }
  return (
      <>
        <div class="container">
          <br/>
          <h1> <u>Counter</u> </h1>
          <h2> Count : {count} </h2>
          <ButtonGroup aria-label="Basic example"size="sm">
            <Button variant="info" onClick={handleDecrement}>Decrease</Button>
            <Button variant="danger" onClick={handleReset}>Reset</Button>
            <Button variant="success" onClick={handleIncrement}>Increase</Button>
          </ButtonGroup>
        </div>
      </>
  );
}

export default App;
