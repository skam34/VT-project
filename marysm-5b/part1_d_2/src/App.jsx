import { useState } from 'react'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = props => <div>{props.value}</div>


const App = () => {
  const [value, setValue] = useState(10)

  const setValueHandler = (number) => () => {
      setValue(number);
      console.log("Value is set to", number)
    }

  return (
    <div>
      <Display value={value}/>
      <Button text="Set to 0" handleClick={setValueHandler(0)}/>
      <Button text="Set to 100" handleClick={setValueHandler(100)}/>
      <br/>
      <Button text="Add 1" handleClick={setValueHandler(value+1)}/>
      <Button text="Take 1" handleClick={setValueHandler(value-1)}/>
      

    </div>
  )
}

export default App
