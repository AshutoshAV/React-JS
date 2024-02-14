import Details from './components/Details';
function App() {
  return (
      <>
        <div class="container">
          <br/>
          <h1> Props Demo </h1>
          <Details />

          <Details name="King" age="24" />
          <Details name="Queen" age="21" />
        </div>
      </>
  );
}

export default App;
