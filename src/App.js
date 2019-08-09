import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Mind from "./pages/Mind";
import Heart from "./pages/Heart";
import Body from "./pages/Body";
import Soul from "./pages/Soul";
import './App.css';

function App() {
  return (
    <Router>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mind" component={Mind}/>
        <Route exact path="/heart" component={Heart} />
        <Route exact path="/body" component={Body} />
        <Route exact path="/soul" component={Soul} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
