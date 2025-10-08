import React from "react";
import { Carousel } from "react-bootstrap";

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/1.jpg"
          alt="Pizza 1"
          style={{ maxHeight: "400px", width: "auto" }}
        />
        <Carousel.Caption>
          <h3>Neapolitan Pizza</h3>
          <p>If you are looking for traditional Italian pizza, this is the best option!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/2.jpg"
          alt="Pizza 2"
          style={{ maxHeight: "400px", width: "auto" }}
        />
        <Carousel.Caption>
          <h3>Fresh Ingredients</h3>
          <p>We use the freshest ingredients for our pizzas.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/3.jpg"
          alt="Pizza 3"
          style={{ maxHeight: "400px", width: "auto" }}
        />
        <Carousel.Caption>
          <h3>Delicious Taste</h3>
          <p>Come and enjoy the authentic taste of Italy!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
