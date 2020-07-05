import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <>
        <div className="bg"></div>
        <div className="modal">
          <div className="card">
            <div className="title">Sign up</div>
            <div className="input-group">
              <input type="text" placeholder="username" />
            </div>
            <div className="input-group">
              <input type="email" placeholder="email" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="password" />
            </div>
            <h4>
              Already registered.? <Link to="/login">Sign In</Link>
            </h4>

            <Button>submit</Button>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
