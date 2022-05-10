import './App.css'
import React, { Component } from 'react'
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      { name: "Muhammad", age: 26 },
      { name: "Tayyab", age: 27 },
      { name: "ali", age: 29 }
    ]
  }
  render() {
    return (
      <div className='App'>
        <h1>hello i'm react</h1>
        <p> This is really working</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Gamming</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App
