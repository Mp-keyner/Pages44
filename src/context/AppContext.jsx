// Crear el archivo del contexto de la aplicacion este caso (AppContext.jsx)
import { createContext, useEffect, useState } from 'react';
import useCounter from '../hook/useCounter';
import useLogin from '../hook/useLogin';

// Crear el contexto
export const MyContext = createContext();

// Crear el proveedor del contexto en este caso MyContextProvider
export const MyContextProvider = ({ children }) => {
    const { GetUser } = useLogin()
    // useEffect(() => {
    //     const valorUsur = GetUser()
    //     console.log(valorUsur)
    // }, [])  
    const [myState, setMyState] = useState('Valor final');
    const contadorGlobal = useCounter()
    const { counter, Increase, Decrease } = contadorGlobal
    return (
        <MyContext.Provider value={{ myState, counter, Increase, Decrease }}>
            {children}
        </MyContext.Provider>
    );
};
