import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function Alerts() {
  return(
    <>
      <br/>
      <h1> Alerts </h1>
      <Alert key="primary" variant="primary">
        This is a primary Alert
      </Alert>
      <Alert variant="success" >
        This is a success Alert
      </Alert>
      <Alert variant="info">
        This Alert has a <Alert.Link href="#"> Link </Alert.Link>
      </Alert>
    <br/>
    <hr/>

    </>
  );

}

export default Alerts;
