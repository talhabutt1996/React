import React from 'react'
const CharComp = (props) => {
    const charstyle = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    }

    return (
        <div>
            <p style={charstyle} onClick={props.clicked}>{props.character}</p>
        </div>
    )
}
export default CharComp