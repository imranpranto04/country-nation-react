import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import CountryDteails from './components/CountryDetails/CountryDteails';
import Header from './components/Header/Header';

function App() {
  return (

    <Router>
      
      <Header/>
      <Switch>

        <Route path ="/home">
          <Home></Home>
        </Route>

        <Route path ="/name/:countryName">
          <CountryDteails></CountryDteails>
        </Route>

        <Route exact path ="/">
          <Home/>
        </Route>

        <Route path ="*">
          <h1 className="text-center my-5">404 Not Found!</h1>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
