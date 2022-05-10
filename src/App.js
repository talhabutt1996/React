import './App.css'
import React, { Component } from 'react'
import Person from './Person/Person'
class App extends Component {
  state = {}
  render() {
    return (
      <div className='App'>
        <h1>hello i'm react</h1>
        <p> This is really working</p>
        <Person name="Muhammad" age="26" />
        <Person name="Tayyab" age="27">My Hobbies: Gamming</Person>
        <Person name="Talha" age="22" />
      </div>
    )
  }
}

export default App
