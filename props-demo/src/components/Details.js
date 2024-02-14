import PropTypes from 'prop-types';

function Details(props) {
  return(
    <>

      <h2> [Name: {props.name} | Age: {props.age}] </h2>

    </>
  );
}

export default Details;

Details.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

Details.defaultProps = {
  name: "Default Name",
  age: 1
}
