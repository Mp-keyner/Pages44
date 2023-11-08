import React, { useState } from 'react'

const useForm = (initialState) => {
    const [state, setState] = useState(initialState);

    const onChange = (value, key) => {
      setState({
        ...state,
        [key]: value,
      });
    };
    const create = ({target:{value, name}}) =>{
        console.log(value)
        console.log(name)
        setState({
            ...state,
            [name]: value,
          });
    }
    const ResetForm = () => {
        setState(initialState)
    }

    return {
        onChange,
        state,
        setState,
        create,
        ResetForm
    }
}

export default useForm