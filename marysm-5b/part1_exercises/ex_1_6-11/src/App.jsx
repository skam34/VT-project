import { useState } from 'react'

const Button = ({text, onClickHandler}) => (  
  <button onClick={onClickHandler}>
    {text}
  </button>
)

const ScoreDisplay = ({text, number}) => (
  <p>{text} - {number}</p>
)

const Feedback = ({handlers = [goodHandler, neutralHandler, badHandler]}) => {
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button text="Good" onClickHandler={handlers[0]}/>
        <Button text="Neutral" onClickHandler={handlers[1]}/>
        <Button text="Bad" onClickHandler={handlers[2]}/>
      </div>
    )
}

const Statistics = (scores = [good, neutral, bad, score]) => {
  return (
    <div>
      <ScoreDisplay text="Good" number={good}/>
      <ScoreDisplay text="Neutral" number={neutral}/>
      <ScoreDisplay text="Bad" number={bad}/>
    </div>
  )
}

function App() {
  // good/neutral/bad/all reviews
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])
  
  const [score, setScore] = useState(0)


  const goodHandler = () => {
    setGood(good+1)
    setAll(all.concat('G'))
    setScore(score+1)
  }
  const neutralHandler = () => {
    setNeutral(neutral+1)
    setAll(all.concat('N'))
  }
  const badHandler = () => {
    setBad(bad+1)
    setAll(all.concat('B'))
    setScore(score-1)
  }

  return (
    <>
      <Feedback handlers={[goodHandler, neutralHandler, badHandler]}/>
      <br/>
      <br/>
      <Statistics score={[good, neutral, bad, score]}/>
    </>
  )
}

export default App
