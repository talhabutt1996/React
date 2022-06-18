import React from 'react'
const Cockpit = (props) => {
    let btnClass = ""
    let classes = []
    if (props.persons.length <= 2) {
        classes.push("red")
    }
    if (props.persons.length <= 1) {
        classes.push("bold")
    }

    return (
        <div>
            <h1>hello i'm react</h1>
            <p className={classes.join(" ")}> This is really working</p>
            <button onClick={props.clicked}>Switch Name</button>
        </div >
    )
}
export default Cockpit