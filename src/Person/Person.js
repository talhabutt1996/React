import React from 'react'
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}> i 'm {props.name} and i'm {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>

    )
}
export default person