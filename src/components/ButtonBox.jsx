import React from 'react'

const ButtonBox = ({randomColor,getRandomAll}) => {

    const backgroundObj={
        backgroundColor:randomColor
      }
  return (
    <button 
      className="card__button" 
      style={backgroundObj}  
      onClick={getRandomAll}
      >&#62;</button>
  )
}

export default ButtonBox