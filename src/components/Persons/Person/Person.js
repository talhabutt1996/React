import React, { Component, Fragment } from 'react'
import './Person.css'
import AuthContext from '../../../context/AuthContext'
class Person extends Component {
    render() {
        return (
            <Fragment>
                <AuthContext.Consumer>
                    {(context) => context.Authenticated ? <p>Authenticated</p> : <p>Please Login</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click}> i 'm {this.props.name} and i'm {this.props.age} year old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment>
        )
    }
}
export default Person