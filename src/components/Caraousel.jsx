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
                  src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Food-Wallpapers-HD-For-Desktop.jpg"
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
                  src="https://www.pxwall.com/wp-content/uploads/2018/06/Wallpaper%20burger,%20steak,%20fire,%205k,%20Food%20788221141.jpg"
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
                  src="https://thewallpaper.co//wp-content/uploads/2016/03/bread-food-restaurant-people-hd-wallpaper-high-resolution-background-images-desktop-images-of-windows-amazing-cool-best-wallpaper-ever-images-free-stock-photos-1600x1025.jpg"
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
