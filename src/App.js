import React, { Component } from "react";
import "./style.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home";
import Login from "./components/Login.jsx";
import Register from "./components/Register";
import Verification from "./components/Verification";
import About from "./components/About";
import EditMenu from "./components/EditMenu";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import CreateMenu from "./components/CreateMenu";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userInfo: "",
    };
  }

  componentDidMount() {
    if (localStorage.authToken) {
      let url = `http://localhost:4000/api/user`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${localStorage.authToken}`,
        },
      })
        .then((res) => res.json())
        .then(({ user }) => {
          this.setState({ isLoggedIn: true, userInfo: user });
        })
        .catch((err) => this.setState({ isLoggedIn: false }));
    }
  }

  updateLoggedIn = (status) => {
    this.setState({ isLoggedIn: status });
  };

  render() {
    return (
      <>
        <Header
          isLoggedIn={this.state.isLoggedIn}
          userInfo={this.state.userInfo}
        />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/login"
            render={() => <Login updateLoggedIn={this.updateLoggedIn} />}
          />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/api/users/:email/verify" component={Verification} />
          <Route
            path="/api/user"
            render={() => <Profile userInfo={this.state.userInfo} />}
          />
          <Route path="/createMenu" component={CreateMenu} />
          <Route path="/editMenu" component={EditMenu} />
          <Route
            to="/editProfile"
            render={() => <EditProfile userInfo={this.state.userInfo} />}
          />
          <Error />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
