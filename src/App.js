import './App.css'
import React, { Component } from 'react'
// import Person from './Person/Person'
import Validation from './ValidationC/ValidationComponent'
import CharComp from './ValidationC/CharComponent'
class App extends Component {
  state = {
    input: ""
  }
  changeListner = (event) => {
    this.setState({ input: event.target.value })
  }
  onDelete = (index) => {
    const text = this.state.input.split("")
    text.splice(index, 1)
    const updatedText = text.join("")
    this.setState({ input: updatedText })
  }
  render() {
    const Char = this.state.input.split("").map((inputChar, index) => {
      return <CharComp
        character={inputChar}
        key={index}
        clicked={() => this.onDelete(index)} />
    })
    return (
      <div>
        <input type="text" onChange={this.changeListner} value={this.state.input} />
        <Validation inputLenght={this.state.input.length} inputUser={this.state.input} />
        {Char}
      </div>
    )

  }

}

export default App
