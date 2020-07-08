import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      redirect: null,
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    let url = `http://localhost:4000/api/users`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: this.state }),
    }).then((res) => {
      if (res.status === 201) {
        this.props.history.push(`/${this.state.email}/verify`);
      }
    });
  };

  render() {
    let { username, email, password } = this.state;

    return (
      <>
        <div className="bg"></div>
        <div className="modal">
          <div className="card">
            <div className="title">Sign up</div>
            <div className="input-group">
              <input
                type="text"
                placeholder="username"
                name="username"
                onChange={this.handleInput}
                value={username}
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={this.handleInput}
                value={email}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={this.handleInput}
                value={password}
              />
            </div>
            <h4>
              Already registered.? <Link to="/login">Sign In</Link>
            </h4>

            <Button onClick={this.handleSubmit} email={email}>submit</Button>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
