import React, { useEffect } from 'react'
const Cockpit = (props) => {
    useEffect(() => {
        console.log('[cockpit] useEffect')
    })
    let classes = []
    if (props.persons.length <= 2) {
        classes.push("red")
    }
    if (props.persons.length <= 1) {
        classes.push("bold")
    }

    return (
        <div>
            <h1 >{props.title}</h1>
            <p className={classes.join(" ")}> This is really working</p>
            <button onClick={props.clicked}>Switch Name</button>
        </div >
    )
}
export default Cockpit