import './App.css'
import React, { Component } from 'react'
import Persons from '../components/Persons/Persons'
import Cockpit from '../Cockpit/Cockpit'
class App extends Component {
  state = {
    persons: [
      { id: '01', name: "Muhammad", age: 26 },
      { id: '02', name: "Tayyab", age: 27 },
      { id: '03', name: "ali", age: 29 }
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
  changeHandler = (event, id) => {
    // console.log("clicked")
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }
  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: "white",
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    let persons = null
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.handleDeletePerson}
            changed={this.changeHandler}
          />
        </div>
      )
    }
    return (

      <div className='App'>
        <Cockpit showPerson={this.state.showPerson} persons={this.state.persons} clicked={this.showTogglePerson} />
        {persons}
      </div >

    )
  }
}

export default (App) 