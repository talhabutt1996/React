import './App.css'
import React, { Component } from 'react'
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      { name: "Muhammad", age: 26 },
      { name: "Tayyab", age: 27 },
      { name: "ali", age: 29 }
    ],
    showPerson: false
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
  showTogglePerson = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson: !doesShow })
  }
  handleDeletePerson = (personsIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personsIndex, 1)
    this.setState({ persons: persons })
  }
  // changeHandler = (event) => {
  //   // console.log("clicked")
  //   this.setState({
  //     persons: [
  //       { name: event.target.value, age: 26 },
  //       { name: "Tayyab", age: 27 },
  //       { name: "ali", age: 25 }
  //     ]
  //   })
  // }
  render() {
    const style = {
      backGroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.handleDeletePerson(index)}
                name={person.name}
                age={person.age}
              />)
          })}
        </div>
      )
    }
    return (
      <div className='App'>
        <h1>hello i'm react</h1>
        <p> This is really working</p>
        <button style={style} onClick={this.showTogglePerson}>Switch Name</button>
        {persons}
      </div >
    )
  }
}

export default App
