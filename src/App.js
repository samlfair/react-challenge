import React from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Temperature from "./pages/Temperature";
import CustomizeImage from "./pages/CustomizeImage";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Switch>
        <Route path="/temperature" component={Temperature} />
        <Route path="/customize-image" component={CustomizeImage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
