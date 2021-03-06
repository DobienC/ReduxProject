import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavbarContent";
import Home from "./pages/Home";
import Mind from "./pages/Mind";
import Heart from "./pages/Heart";
import Body from "./pages/Body";
import Soul from "./pages/Soul";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
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
