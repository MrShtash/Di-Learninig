import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="HongKong.jpeg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="Macao.jpeg" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="Japan.jpeg" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="LasVegas.jpeg" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    );
  }
}

export default MyCarousel;
