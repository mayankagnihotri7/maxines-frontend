import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Verification extends Component {

componentDidMount() {
    console.log(this.props.email)
    // let url = `http://localhost:4000/api/users/${email}/verify`
}


  render() {
    return (
      <div class="group">
        <input type="text" required name='verification' />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Name</label>
        <Button>Submit</Button>
      </div>
    );
  }
}

export default Verification;
