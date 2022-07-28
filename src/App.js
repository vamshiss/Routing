import "./styles.css";
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
