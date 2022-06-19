import React, { Component } from 'react'
import './Person.css'
class Person extends Component {
    render() {
        const style = {
            width: "450px"
        }
        return (
            <div className='person' style={style}>
                <p onClick={this.props.click}> i 'm {this.props.name} and i'm {this.props.age} year old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>

        )
    }
}
export default Person