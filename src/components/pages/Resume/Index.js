import React from 'react';
import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <div className='firstDiv'>
        <h1>Resume</h1>
        < br />
        
        <h3>Front End:</h3>
        < hr />
        <h3>&#x2022; HTML</h3>
        <h3>&#x2022; CSS</h3>
        <h3>&#x2022; JavaScript</h3>
        <h3>&#x2022; JQUERY</h3>
        <h3>&#x2022; Bootstrap</h3>
        <h3>&#x2022; ReactJs</h3>
        <br />
       
        <h3>Back End:</h3>
        < hr />
        <h3>&#x2022; React</h3>
        <h3>&#x2022; Node Js</h3>
        <h3>&#x2022; Express</h3>
        <h3>&#x2022; Sequelize</h3>
        <h3>&#x2022; MySQL</h3>
        <h3>&#x2022; MongoDB</h3>
        <h3>&#x2022; Handlebars</h3>

      </div>
      <div className='firstDiv'>
        <h1>My Resume Can be viewed here </h1>
        <a href='https://docs.google.com/document/d/1cuIjUAzhsFl2wAQlh81POOykPlKADapxITBisShHeT4/edit?usp=sharing'>
          <button>
          Click Here!
          </button>
        </a>
      </div>
    </div>
  );
}
