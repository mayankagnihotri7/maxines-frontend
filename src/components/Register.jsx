import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Register extends Component {
  render() {
    return (
      <>
        <div class="bg"></div>
        <div class="modal">
          <div class="card">
            <div class="title">Sign up</div>
            <div class="input-group">
              <input type="text" placeholder="username" />
            </div>
            <div class="input-group">
              <input type="email" placeholder="email" />
            </div>
            <div class="input-group">
              <input type="password" placeholder="password" />
            </div>

            <Button>submit</Button>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
