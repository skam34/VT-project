const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

// nevermind...
const Content = (props) => {
  return (
  <>
  <p>
    {props.parts[0].name} {props.parts[0].exercises}
  </p>
  <p>
    {props.parts[1].name} {props.parts[1].exercises}
  </p>
  <p>
    {props.parts[2].name} {props.parts[2].exercises}
  </p>
  </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.p.name} {props.p.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.e1.exercises + props.e2.exercises + props.e3.exercises}</p>  
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]

  return (
    <div>
      <Header name={course}/>

      <Content parts={parts}/>
      
      <Total e1={parts[0]} e2={parts[1]} e3={parts[2]}/>
    </div>
  )
}

export default App