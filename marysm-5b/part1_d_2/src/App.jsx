import { useState } from 'react'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const resetValueHandler = () => {
    setValue(0);
  }

  return (
    <div>
      {value}
      <Button text="reset to zero" handleClick={resetValueHandler}/>
    </div>
  )
}

export default App
