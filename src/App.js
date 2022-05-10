import './App.css'
import React, { useState } from 'react'
import Person from './Person/Person'
const App = props => {
  const [PersenState, setPerenState] = useState({
    persons: [
      { name: "Talha", age: 26 },
      { name: "Tayyab", age: 27 },
      { name: "ali", age: 25 }
    ]
  })

  const switchButtonHandler = () => {
    // console.log("clicked")
    setPerenState({
      persons: [
        { name: "Muhammad", age: 26 },
        { name: "Tayyab", age: 27 },
        { name: "ali", age: 22 }
      ]
    })
  }
  return (
    <div className='App'>
      <h1>hello i'm react</h1>
      <p> This is really working</p>
      <button onClick={switchButtonHandler}>Switch Name</button>
      <Person name={PersenState.persons[0].name} age={PersenState.persons[0].age} />
      <Person name={PersenState.persons[1].name} age={PersenState.persons[1].age}>My Hobbies: Gamming</Person>
      <Person name={PersenState.persons[2].name} age={PersenState.persons[2].age} />
    </div>
  )
}
export default App