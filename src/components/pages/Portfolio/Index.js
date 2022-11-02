import React from 'react';
import "./Portfolio.css";
import Carousel from 'react-bootstrap/Carousel';



export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>Portfolio Page</h1>
      < br />
      < hr />
      < br />
    <Carousel>
    <Carousel.Item interval={500}>
        <img
          className="d-block mx-auto w-50"
          src="./img/systembade.png"
          alt="Second slide"
          height={"400px"}
          width={'400px'}
        />
        <Carousel.Caption className='caption'>
          <h3>Orbital Odyssey</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button href="https://github.com/Proper-Stevo/ThePonderosaPines">GitHub</button>
          <button href="https://proper-stevo.github.io/ThePonderosaPines/">Website</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img 
          className="d-block mx-auto w-50"
          src="./img/cards.webp"
          alt="First slide"
          height={"400px"}
          width={'400px'}
        />
        <Carousel.Caption className='caption'>
          <h3>Card Game</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button href="https://nameless-sierra-87070.herokuapp.com/notes">GitHub</button>
          <button href="https://nameless-sierra-87070.herokuapp.com/notes">Website</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block mx-auto w-50"
          src="./img/nationalPark.jpeg"
          alt="Second slide"
          height={"400px"}
          width={'400px'}
        />
        <Carousel.Caption className='caption'>
          <h3>National Park Finder</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button href="https://github.com/Proper-Stevo/ThePonderosaPines">GitHub</button>
          <button href="https://proper-stevo.github.io/ThePonderosaPines/">Website</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto w-50"
          src="./img/noteimage.png"
          alt="Third slide"
          height={"400px"}
          width={'400px'}
        />
        <Carousel.Caption className='caption'>
          <h3>Note Taker Applcation</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button href="https://github.com/Proper-Stevo/NoteTaker">GitHub</button>
          <button href="https://nameless-sierra-87070.herokuapp.com/notes">Website</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto w-50"
          src="./img/Calculator_PNG.png"
          alt="Third slide"
          height={"400px"}
          width={'400px'}
        />
        <Carousel.Caption className='caption'>
          <h3>Calculator</h3>
          <p>
            Very Simple Calculator
          </p>
          <button href='https://github.com/Proper-Stevo/calculator'>GitHub</button>
          <button href='https://proper-stevo.github.io/calculator/'>Website</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

// the projects youve worked on 