import React, { Component, Fragment } from 'react'
import './Person.css'
import AuthContext from '../../../context/AuthContext'
class Person extends Component {
    static contextType = AuthContext
    render() {
        return (
            <Fragment>

                {this.context.Authenticated ? <p>Authenticated</p> : <p>Please Login</p>}
                <p onClick={this.props.click}> i 'm {this.props.name} and i'm {this.props.age} year old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment>
        )
    }
}
export default Person