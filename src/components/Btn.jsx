import React, { useContext } from 'react'
import { MyContext } from '../context/AppContext'

const Btn = () => {
    const { Increase, Decrease } = useContext(MyContext)
    return (
        <>
            <button onClick={() => Increase()}>Click</button>
            <button onClick={() => Decrease()}>Click</button>
        </>
    )
}

export default Btn
