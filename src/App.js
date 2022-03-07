import './App.css';
import Header from './Components/Header';
import Mainmenu from './Components/Mainmenu';
import Sidemenu from './Components/Sidemenu';
import Rightsidemenu from './Components/Rightsidemenu';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
        <Header/>
      <Sidemenu/>
      <Mainmenu/>
      <Rightsidemenu/>
        </Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
