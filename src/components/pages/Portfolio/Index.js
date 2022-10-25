import React from 'react';
import "./Portfolio.css";
import Carousel from 'react-bootstrap/Carousel';



export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>Portfolio Page</h1>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./img/cards.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button>GitHub</button>
          <button>Website</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="./img/nationalPark.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>GitHub</button>
          <button>Website</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/noteimage.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button>GitHub</button>
          <button>Website</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

// the projects youve worked on 