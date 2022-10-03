import { animals } from './animals';
import React from "react";
import ReactDOM from "react-dom";

const title = "";

const showBackground = false;

const background = (
  <div>
    <img src="/images/ocean.jpg" className="background" 
    alt="ocean" />
  </div>
)

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      arialabel={animal}
      role="button"
      onClick={displayFact}
    />
  )
}

function displayFact(e){
  const selectedAnimalFact = e.target.alt;
  const animalInfo = animals[selectedAnimalFact];
  const Index = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[Index]
  document.getElementById("fact").innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1>
      {title === "" ? "Click an animal for a fun fact" : title}</h1>
      {showBackground || background}
    <p id="fact"></p>
    <div className="animals">
      {images}
    </div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
