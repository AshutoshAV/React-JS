import './App.css';
import Alerts from "./components/Alerts";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badges from './components/Badges';
import Buttons from './components/Buttons';
import ButtonGroups from './components/ButtonGroups';
import NavBars from './components/NavBars';
function App() {
  return (
    <>
      <NavBars/>
      <div className="container">
        <Alerts />
        <Badges />
        <Buttons/>
        <ButtonGroups />
    </div>
    </>
  );
}

export default App;
