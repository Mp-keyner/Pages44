import React, { useState } from 'react'

const useCounter = () => {
    const [counter, setCounter] = useState(0) //Estado
    const Increase = () => {
        setCounter(counter + 1)
    }
    const Decrease = () => {
        setCounter(counter - 1)
    }
    const Reset = () => {
        setCounter(0)
    }
    return {
        Increase,
        Decrease,
        Reset,
        counter
    }
}

export default useCounter