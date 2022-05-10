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
  switchButtonHandler = (newName) => {
    // console.log("clicked")
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: "Tayyab", age: 27 },
        { name: "ali", age: 25 }
      ]
    })
  }
  changeHandler = (event) => {
    // console.log("clicked")
    this.setState({
      persons: [
        { name: event.target.value, age: 26 },
        { name: "Tayyab", age: 27 },
        { name: "ali", age: 25 }
      ]
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>hello i'm react</h1>
        <p> This is really working</p>
        <button onClick={this.switchButtonHandler.bind(this, 'rabia')}>Switch Name</button>
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age} changed={this.changeHandler} />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}>My Hobbies: Gamming</Person>
        <Person name={this.state.persons[2].name}
          age={this.state.persons[2].age} click={this.switchButtonHandler.bind(this, 'Farzana')} />
      </div >
    )
  }
}

export default App
