import React, { Component } from "react";

class Caraousel extends Component {
  render() {
    return (
      <div>
        <div className="carousel">
          <ul className="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li className="slide-container">
              <div className="slide-image">
                <img
                  src="https://all4desktop.com/data_images/original/4244814-food.jpg"
                  alt="arriving shortly.."
                />
              </div>
              <div className="carousel-controls">
                <label htmlFor="img-3" className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label htmlFor="img-2" className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />
            <li className="slide-container">
              <div className="slide-image">
                <img
                  src="https://theculinaryaddict.com/wp-content/uploads/2019/10/vegetables-italian-pizza-restaurant.jpg"
                  alt="arriving shortly.."
                />
              </div>
              <div className="carousel-controls">
                <label htmlFor="img-1" className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label htmlFor="img-3" className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-3" />
            <li className="slide-container">
              <div className="slide-image">
                <img
                  src="https://wallpaperaccess.com/full/680036.jpg"
                  alt="arriving shortly.."
                />
              </div>
              <div className="carousel-controls">
                <label htmlFor="img-2" className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label htmlFor="img-1" className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <div className="carousel-dots">
              <label
                htmlFor="img-1"
                className="carousel-dot"
                id="img-dot-1"
              ></label>
              <label
                htmlFor="img-2"
                className="carousel-dot"
                id="img-dot-2"
              ></label>
              <label
                htmlFor="img-3"
                className="carousel-dot"
                id="img-dot-3"
              ></label>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Caraousel;
