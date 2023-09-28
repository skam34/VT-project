const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
  <>
  <p>
    {props.p1} {props.e1}
  </p>
  <p>
    {props.p2} {props.e2}
  </p>
  <p>
    {props.p3} {props.e3}
  </p>
  </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.p} {props.e}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>  
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

      <Part p={parts[0].name} e={parts[0].exercises}/>
      <Part p={parts[1].name} e={parts[1].exercises}/>
      <Part p={parts[2].name} e={parts[2].exercises}/>
      
      <Total e1={parts[0].exercises} e2={parts[1].exercises} e3={parts[2].exercises}/>
    </div>
  )
}

export default App