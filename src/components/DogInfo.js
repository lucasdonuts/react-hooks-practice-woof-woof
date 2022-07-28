import React, { useEffect } from 'react';

const DogInfo = ({ dogToShow, toggleGoodDog }) => {

  const handleClick = (e) => {
    // Working here
    e.target.innerText = 'Good Dog' ? 'Bad Dog' : 'Good Dog'

    toggleGoodDog(dogToShow);

    console.log(dogToShow);
  }

  if(dogToShow) {
    const { id, name, image, isGoodDog } = dogToShow;
    return (
      <>
        <img src={ image } alt='A good dog' />
        <h3>{ name }</h3>
        <button onClick={ handleClick }>
          { isGoodDog ? 'Good Dog' : 'Bad Dog' }
        </button>
      </>
    )
  } else {
    return (
      <>
        
      </>
    )
  }

}

export default DogInfo;