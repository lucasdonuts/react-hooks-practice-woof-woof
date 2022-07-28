import React, { useState, useEffect } from "react";
import DogInfo from './DogInfo';
import DogBar from './DogBar';

function App() {
  const [dogs, setDogs] = useState([]);
  const [selectedDogId, setSelectedDogId] = useState();
  
  const dogToShow = dogs.find( dog => dog.id === selectedDogId )

  useEffect( () => {
    fetch('http://localhost:3001/pups')
      .then( res => res.json() )
      .then( dogData => {
        setDogs(dogData)
        // setSelectedDogId(dogData[0].id) 
      } )
  }, [])

  const selectDog = (dogToSelect) => {
    setSelectedDogId(prev => dogToSelect.id)
  }

  const toggleGoodDog = (dog) => {
    fetch( `http://localhost:3001/pups/${dog.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isGoodDog: !dog.isGoodDog })
    })
      .then( res => res.json() )
      .then( updatedDog => setDogs( dogs.map( dog => {
        if( dog.id === updatedDog.id ) {
          return { ...dog, isGoodDog: !dog.isGoodDog }
        } else {
          return dog;
        }
      } ) ) )
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DogBar dogs={ dogs } selectDog={ selectDog } />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo dogToShow={ dogToShow } toggleGoodDog={ toggleGoodDog } />
        </div>
      </div>
    </div>
  );
}

export default App;
