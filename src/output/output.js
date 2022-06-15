import React from 'react'

const outputUser = (props) => {
    return (
        <div className='outputUser'>
            <p>UserName: {props.userName}</p>
            <p> I Hope i'ill be overwritten</p>
        </div>
    )
}
export default outputUser