import React, { Component } from "react";
import uuid from "react-uuid";
import { Loader } from "semantic-ui-react";
import Caraousel from "./Caraousel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "",
    };
  }

  componentDidMount() {
    let url = `http://localhost:4000/api/menu`;
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((menu) => this.setState({ menu }));
  }

  render() {
    let { menu } = this.state.menu;

    if (!menu) {
      return <Loader active inline="centered" />;
    }

    return (
      <>
        <Caraousel />
        <div className=" flex-2">
          {menu.map((menu) => {
            return (
              <div className="menu-container padding-top-3rem" key={uuid()}>
                <div className="ui card">
                  <div className="image">
                    <img src={menu.image} alt="Coming Soon..." />
                  </div>
                  <div className="content">
                    <div className="header">{menu.dishName}</div>
                    <div className="meta">
                      <span className="date">
                        {menu.category.map((category) => (
                          <strong key={uuid()}>{category}</strong>
                        ))}
                      </span>
                    </div>
                    <div className="description">{menu.cost}</div>
                  </div>
                  <div className="extra content">
                    <div className="ui two buttons">
                      <button className="ui green basic button">Order</button>
                      <button className="ui red basic button">Recipe</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Home;
