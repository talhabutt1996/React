import React, { Component, Fragment } from 'react'
import './Person.css'
import Auxi from '../../../HOC/Auxiliary'
class Person extends Component {
    render() {
        return (
            <Fragment>
                {this.props.isAuth ? <p>Authenticated</p> : <p>Please Login</p>}
                <p onClick={this.props.click}> i 'm {this.props.name} and i'm {this.props.age} year old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment>
        )
    }
}
export default Person