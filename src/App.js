import { useState, useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './core/layout/Header';
import HomePage from './core/pages/Homepage/HomePage';
import HowToBuy from './core/pages/HowToBuye/HowToBuy';

function App() {
  const [loaderscreen, setLoaderscreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaderscreen(false)
    }, 3000);

  }, [])
  return (
    <Router basename="/">
      <div className="App">
        <div className={"loader " + (loaderscreen ? "" : "hideLoader")}>
            <h3 className="loader__text title">
                <span>T</span>
                <span>I</span>
                <span>P</span>
                <span>S</span>
                <span>Y</span>
            </h3>
        </div>
        <Header />
        <Switch>
          <Route path="/howtobuy">
            <HowToBuy />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
