import { useState } from 'react'
import './App.css'
import ButtonBox from './components/ButtonBox'
import QuoteBox from './components/QuoteBox'
import quotes from "./json/quotes.json"

const color = ['#1433d6', '#696585', '#860e76', '#83b865', '#9d3e74', '#953748', '#091843']

function App() {
  const getIndexRandom=arr =>Math.floor(Math.random()*arr.length)
  const firstElement=quotes[getIndexRandom(quotes)]
  const firstColor=color[getIndexRandom(color)]
  const [randomQuote,setRandomQuote]=useState(firstElement)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject={
    backgroundColor:randomColor
  }
  const getRandomAll=()=>{
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }
  return (
    <div style={backgroundObject}className="App">
      <QuoteBox 
      randomQuote={randomQuote}
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      /> 
    </div>
  )
}

export default App
