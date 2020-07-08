import React, { Component } from "react";
import "./style.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home";
import Login from "./components/Login.jsx";
import Register from "./components/Register";
import Verification from "./components/Verification";
import About from "./components/About";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Error />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
