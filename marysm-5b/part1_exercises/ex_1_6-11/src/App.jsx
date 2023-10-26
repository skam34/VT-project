import { useState } from 'react'

const Button = ({text, onClickHandler}) => (  
  <button onClick={onClickHandler}>
    {text}
  </button>
)

const ScoreDisplay = ({text, number}) => (
  <p>{text}: {number}</p>
)

const Feedback = ({goodHandler, neutralHandler, badHandler}) => {
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button text="Good" onClickHandler={goodHandler}/>
        <Button text="Neutral" onClickHandler={neutralHandler}/>
        <Button text="Bad" onClickHandler={badHandler}/>
      </div>
    )
}

const Statistics = ({good, neutral, bad, total, in_order}) => {
  let positive_percent = (good/(good+bad+neutral))*100 + "%"
  let average = ((good*1 + bad*-1)/(good+bad))
  
  return (
    <div>
      <ScoreDisplay text="Good" number={good}/>
      <ScoreDisplay text="Neutral" number={neutral}/>
      <ScoreDisplay text="Bad" number={bad}/>
      <ScoreDisplay text="Total rating" number={total}/>
      <ScoreDisplay text="Average" number={average}/>
      <ScoreDisplay text="Positive" number={positive_percent}/>
      <ScoreDisplay text="Order" number={in_order}/>
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
    console.log("Good:", good+1)
    setGood(good+1)
    setAll(all.concat('G'))
    setScore(score+1)
  }
  const neutralHandler = () => {
    console.log("Neutral", neutral+1)
    setNeutral(neutral+1)
    setAll(all.concat('N'))
  }
  const badHandler = () => {
    console.log("Evil", bad+1)
    setBad(bad+1)
    setAll(all.concat('B'))
    setScore(score-1)
  }

  return (
    <>
      <Feedback goodHandler={goodHandler} neutralHandler={neutralHandler} badHandler={badHandler}/>
      <br/>
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad} total={score} in_order={all}/>
    </>
  )
}

export default App