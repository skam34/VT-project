import { useState } from 'react'

const Button = ({text, onClickHandler}) => (  
  <button onClick={onClickHandler}>
    {text}
  </button>
)

const ScoreDisplay = ({text, number}) => (
  <tr>
    <td>{text}</td>
    <td>{number}</td>
  </tr>
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
  if (good+bad == 0) { // to prevent NaN
    average = 0
  }
  
  return (
    <table>
      <thead><tr><th>Category</th><th>Score</th></tr></thead>
      <tbody>
        <ScoreDisplay text="Good" number={good}/>
        <ScoreDisplay text="Neutral" number={neutral}/>
        <ScoreDisplay text="Bad" number={bad}/>
        <ScoreDisplay text="Total rating" number={total}/>
        <ScoreDisplay text="Average" number={average}/>
        <ScoreDisplay text="Positive" number={positive_percent}/>
        <ScoreDisplay text="Order" number={in_order}/>
      </tbody>
    </table>
  )
}

const Anecdotes = ({anecdotes=[], currentAnecdote, nextHandler, voteHandler}) => {
  return (
    <>
      <div>
        {anecdotes[currentAnecdote]}
      </div>
      <Button text={"Vote"} onClickHandler={voteHandler}/>
      <Button text={"Next Anecdote"} onClickHandler={nextHandler}/>
    </>
  )
}

function App() {
  ///*
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]  
  
  const [currentAnecdote, setCurrentAnecdote] = useState([Math.floor(Math.random() * anecdotes.length), false]) // [random_number, is_first_render?]
  const [currentAnecdoteScores, setCurrentAnecdoteScores] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  
  // not sure how i managed to get it to work but it does so yay ^^

  console.log("--------------------------------", currentAnecdote)
  //*/
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

  const voteHandler = (an, current, scores) => {
    return () => {
      const copy = [scores]
      copy[current]++
      // console.log("voted for:", an[current], "(" + copy[current] + ")")
      setCurrentAnecdoteScores(copy)
      console.log(an[0])
    }
  }

  const nextAnecdoteHandler = () => {
    let helper = 0
    let prev = currentAnecdote[0]
    if (currentAnecdote[0] < anecdotes.length-1) {
      setCurrentAnecdote([currentAnecdote[0]+1, true])
      helper = currentAnecdote[0]+1
    } else {
      setCurrentAnecdote([0, true])
    }
    console.log("Previous Anecdote number", prev)
    console.log("Current Anecdote number", helper)
  }

  if (good + bad + neutral) {
    return (
      <>
        <Anecdotes anecdotes={anecdotes} currentAnecdote={currentAnecdote[0]} nextHandler={nextAnecdoteHandler} voteHandler={voteHandler(anecdotes, currentAnecdote, currentAnecdoteScores)}/>
        <Feedback goodHandler={goodHandler} neutralHandler={neutralHandler} badHandler={badHandler}/>
        <br/>
        <br/>
        <Statistics good={good} neutral={neutral} bad={bad} total={score} in_order={all}/>
      </>
    )
  } else {
    return (
        <>
          <Anecdotes anecdotes={anecdotes} currentAnecdote={currentAnecdote[0]} nextHandler={nextAnecdoteHandler} voteHandler={voteHandler((anecdotes, currentAnecdote, currentAnecdoteScores))}/>
          <Feedback goodHandler={goodHandler} neutralHandler={neutralHandler} badHandler={badHandler}/>
        </>
    )
  }
}

export default App