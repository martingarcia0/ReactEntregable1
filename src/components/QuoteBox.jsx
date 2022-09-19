import React from 'react'
import ButtonBox from './ButtonBox'
const QuoteBox = ({randomQuote,randomColor,getRandomAll}) => {
  const colorObj={
    color:randomColor
  }
  const backgroundObj={
    backgroundColor:randomColor
  }
  return (
    <article  className='card' style={colorObj}>
      <p className="card__quote">{randomQuote.quote}</p>
      <h1 className="card__author">{randomQuote.author}
      
      </h1>
      <ButtonBox
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      />
    </article>
  )
}

export default QuoteBox