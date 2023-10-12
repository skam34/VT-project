import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = (text, handleClick) => <button onClick={handleClick}> {text} </button>

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)  
  } 
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  return (
    <div>
      <Display counter={counter}/>

      <Button text="plus" handleClick={increaseByOne}/>
      <Button text="zero" handleClick={setToZero}/>
      <Button text="minus" handleClick={decreaseByOne}/>
    </div>
  )
}

export default App