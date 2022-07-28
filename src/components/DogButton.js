import React from 'react';

const DogButton = ({ dog, selectDog }) => {
  return (
    <span onClick={ () => selectDog(dog) }>
      { dog.name }
    </span>
  )
}

export default DogButton;