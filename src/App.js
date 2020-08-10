import React from 'react';
import Home from './components/Home/homeIndex';
import Covid from './components/Covid/covidIndex';
import Weather from './components/Weather/weatherIndex';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  return (
    <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/covid" component={Covid}/>
            <Route path="/weather" component={Weather}/>
          </Switch>
    </Router>
    
  );
}

export default App;
