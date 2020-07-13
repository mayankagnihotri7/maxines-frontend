import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class CreateMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishName: "",
      cost: "",
      category: [],
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    let url = `http://localhost:4000/api/menu`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${localStorage.authToken}`,
      },
      body: JSON.stringify({ menu: this.state }),
    }).then((res) => {
      if (res.status === 200) {
        this.props.history.push("/");
      }
    });
  };

  render() {
    let { dishName, cost, category } = this.state;
    return (
      <div className="background-image">
        <div className="menu-container padding-top-3rem">
          <h2 className="margin-bottom-1rem menu-font">Creating Menu</h2>
        </div>
        <div className="menu-container">
          <div className="margin-top-3rem">
            <label className="label">Dish Name:</label>
            <input
              type="text"
              placeholder="Enter dish name to be created..."
              name="dishName"
              value={dishName}
              onChange={this.handleInput}
              className="margin-bottom-1rem input"
            />
            <label className="label">Cost:</label>
            <input
              type="number"
              placeholder="What's the cost.?"
              name="cost"
              value={cost}
              onChange={this.handleInput}
              className="margin-bottom-1rem input"
            />
            <label className="label">Category:</label>
            <input
              type="text"
              placeholder="Which category will the dish be in.?"
              name="category"
              value={category}
              onChange={this.handleInput}
              className="margin-bottom-1rem input"
            />
            <Button onClick={() => this.handleSubmit()}>Create Menu </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMenu;
