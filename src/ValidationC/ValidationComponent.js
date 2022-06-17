import React from 'react'
const Validation = (props) => {
    let validationMessage = "text is long enough"
    if (props.inputLenght <= 5) {
        validationMessage = "text is too short"
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>

    )
}
export default Validation