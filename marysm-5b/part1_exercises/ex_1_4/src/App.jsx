const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

// not used anymore
// 
// const Content = (props) => {
//   return (
//   <>
//   <p>
//     {props.p1} {props.e1}
//   </p>
//   <p>
//     {props.p2} {props.e2}
//   </p>
//   <p>
//     {props.p3} {props.e3}
//   </p>
//   </>
//   )
// }

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

      <Part p={parts[0]}/>
      <Part p={parts[1]}/>
      <Part p={parts[2]}/>
      
      <Total e1={parts[0]} e2={parts[1]} e3={parts[2]}/>
    </div>
  )
}

export default App