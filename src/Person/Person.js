import React from 'react'
const person = (props) => {
    return (
        <div>
            <p> i 'm {props.name} and i'm {props.age} year old</p>
            <p>{props.children}</p>
        </div>

    )
}
export default person