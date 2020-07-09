import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: "" };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    let url = `http://localhost:4000/api/users/login`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: this.state }),
    })
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push("/");
          this.props.updateLoggedIn(true);
          return res.json();
        } else {
          this.setState({ error: "Something went wrong.!" });
        }
      })
      .then((res) => {
        localStorage.setItem("authToken", res.token);
      });
  };

  render() {
    let { email, password } = this.state;

    return (
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Email"
                placeholder="Enter email"
                onChange={this.handleInput}
                name="email"
                value={email}
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                onChange={this.handleInput}
                name="password"
                value={password}
              />

              <Button
                content="Login"
                primary
                onClick={() => this.handleLogin()}
              />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Link to="/register">
              <Button content="Sign up" icon="signup" size="big" />
            </Link>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    );
  }
}

export default Login;
