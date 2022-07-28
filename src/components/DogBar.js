import React from 'react';
import DogButton from './DogButton';

const DogBar = ({ dogs, selectDog }) => {
  return (
    <>
      { dogs.map( dog => {
        return (
          <DogButton key={ dog.id } dog={ dog } selectDog={ selectDog } />
        )
      })}
    </>
  )
}

export default DogBar;