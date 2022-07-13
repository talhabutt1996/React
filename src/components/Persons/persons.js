import React, { PureComponent } from 'react'
import Person from '../Persons/Person/Person'
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedstateFromProps')
    //     return state
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Personj.js] shouldComponentUpdate')
    //     if (nextProps.persons !== this.props.persons || nextProps.clicked !== this.props.clicked || nextProps.changed !== this.props.changed) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshots! ' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] ComponentDidiUpdate')
        console.log(snapshot)
    }
    render() {
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                    isAuth={this.props.isAuthenticated}
                />)
        })
    }
}
export default Persons