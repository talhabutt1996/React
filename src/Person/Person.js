import React from 'react'
import './Person.css'
const person = (props) => {
    const style = {
        '@media (min-width : 500px)': {
            width: "450px;"
        }
    }
    return (
        <div className='person' style={style}>
            <p onClick={props.click}> i 'm {props.name} and i'm {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>

    )
}
export default (person)