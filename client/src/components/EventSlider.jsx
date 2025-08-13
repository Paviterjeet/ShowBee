import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import slide1 from "../assets/slider/slider1.png"; // Save your images in src/assets
import slide2 from "../assets/slider/slider2.png";

const EventSlider = () => {
  return (
    <div className="container my-3">
      <Carousel indicators={false} controls={true} interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded h-50"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded h-50"
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded h-50"
            src={slide1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default EventSlider;
