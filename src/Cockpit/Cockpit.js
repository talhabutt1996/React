import React, { useEffect, useContext } from 'react'
import authContext from '../context/AuthContext'
const Cockpit = (props) => {
    useEffect(() => {
        console.log('[cockpit] useEffect')
        const timer = setTimeout(() => {
            alert('save your Data at Cloud')
        }, 1000)
        return () => {
            clearTimeout(timer)
            console.log('cleanup uisng useeffect')
        }
    }, [])
    const AuthContext = useContext(authContext)
    useEffect(() => {
        console.log('[cockpit] 2nd useEffect')
        return () => { console.log('cleanup uisng  2nd useeffect') }
    })
    let classes = []
    if (props.personsLength <= 2) {
        classes.push("red")
    }
    if (props.personsLength <= 1) {
        classes.push("bold")
    }

    return (
        <div>
            <h1 >{props.title}</h1>
            <p className={classes.join(" ")}> This is really working cant belive</p>
            <button onClick={props.clicked}>Switch Name</button>
            <button onClick={AuthContext.login}>LoginIN</button>
        </div >
    )
}
export default React.memo(Cockpit)