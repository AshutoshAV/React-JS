import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
function Badges() {
  return(
    <>
      <br/>
      <h1> Badges </h1>
      <h4>
        Sapmle Heading H4 <Badge bg="primary"> New </Badge>
      </h4>

      <h4>
        Cart <Badge bg="primary"> 1 </Badge>
      </h4>

      <Stack direction="horizontal" gap={1}>
          <Badge pill bg="primary"> primary pill </Badge>
          <Badge bg="secondary"> secondary </Badge>
          <Badge bg="info"> info </Badge>
      </Stack> <br/>
      <hr/>

    </>
  );
}

export default Badges;
