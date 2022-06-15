import React from "react"

const userInput = (props) => {
    const inputStyle = {
        fontsize: "20px",
        border: "2px solid red"

    }
    return (
        <div className="inputUser">
            <input style={inputStyle} onChange={props.changed} type="text" value={props.curentName} />
        </div>
    )
}
export default userInput
