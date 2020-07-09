import React, { Component } from "react";
import "semantic-ui-react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    console.log(this.props.userInfo, "----------------------");
    let { user, username, bio, image } = this.props.userInfo;
    return (
      <div>
        <div className="ui pointing secondary menu container">
          <Link className="item">Edit Profile</Link>
          <Link className="item">Friends</Link>
          <div className="right menu">
            <Link className="item">Logout</Link>
          </div>
        </div>
        <div className="ui segment container">
          <img src={image} alt="Coming Soon..." />
          <h2>{username}</h2>
          <h1>{user}</h1>
          <h3>{bio}</h3>
        </div>
      </div>
    );
  }
}

export default Profile;
