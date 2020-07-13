import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class EditProfile extends Component {
  handleInput = ({ target: { name, value } }) => {
    if (this.props.userInfo) {
      let user = this.props.userInfo;
      user[name] = value;
      this.setState({ user });
    }
  };

  handleUpdate = () => {
    let url = `http://localhost:4000/api/user`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${localStorage.authToken}`,
      },
      body: JSON.stringify({ profile: this.state.user }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({ userInfo: data.user });
        this.props.history.push("/");
      });
  };

  render() {
    let { username, email, bio } = this.props.userInfo;
    return (
      <div className="edit-form_container">
        <div id="contact">
          <h3>Edit Here:</h3>
          <input
            placeholder="Your username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleInput}
            autoFocus
            className="fieldset"
          />

          <input
            placeholder="Your Email Address"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInput}
            className="fieldset"
          />

          <textarea
            placeholder="Type your Bio Here...."
            name="bio"
            value={bio}
            onChange={this.handleInput}
            className="fieldset"
          />

          <button type="submit" id="contact-submit" onClick={this.handleUpdate}>
            Update
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(EditProfile);
