import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleVerify = () => {
    let url = `http://localhost:4000/api/users/${this.props.match.params.email}/verify`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: this.state }),
    }).then((res) => {
      if (res.status === 201) {
        this.props.history.push(`/login`)
      }
    });
  };

  render() {
    
    let { code } = this.state;

    return (
      <div className="modal">
        <div className="card">
          <div className="title">Enter code below:</div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your verification code"
              name="code"
              onChange={this.handleInput}
              value={code}
            />
            <Button onClick={() => this.handleVerify()}>Verify</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Verification;
