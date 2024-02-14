import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonGroups() {
  return(
    <>

      <br/>
      <h1> Button Groups </h1>
      <ButtonGroup aria-label="Basic example">
     <Button variant="secondary">Decrement</Button>
     <Button variant="secondary">Reset</Button>
     <Button variant="secondary">Increment</Button>
   </ButtonGroup>

   <br/> <br/>
   <h1> Button Toolbar</h1>
   <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button>5</Button> <Button>6</Button> <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
    <br/> <hr/>
    </>
  );

}
export default ButtonGroups;
