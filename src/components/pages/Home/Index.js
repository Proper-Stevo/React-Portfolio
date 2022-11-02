import React from 'react';
import "./Home.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Home() {
  return (
    <div className='frontPage'>
      <div className='nameID'>I am Steven Barrios</div>
      <p>
        I am a Full Stack Developer. I like dabbing in various frontend development and backend devlopment projects.
        I love to learn about new technologies, learn about technical advances, nature and dogs.
      </p>
          <CardGroup className='cardsTotal'>
            <Card className='cardOne'>
              <Card.Body>
                <Card.Title>Space Odyssey</Card.Title>
                <Card.Text>
                  Come see space in a whole new way!
                  <img src='./img/systembade.png' alt='solar system' height={"300px"} ></img>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='cardTwo'>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{' '}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='cardThree'>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This card has even longer content than the
                  first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup> 
          </div>
        );
      };

// introduction about yourself