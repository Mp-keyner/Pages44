import React, { useState } from 'react'

const useLogin = () => {

  const GetUser = () => {
    const [user, setUser] = useState(false);
    const User = JSON.parse(localStorage.getItem('user'))
    if (User) {
        console.log('Si exixte usuario')
        setUser(true);
    }
    else{
        console.log('No existe')
        setUser(false);
    }
    return user;
  }
  const CreateUser = (user) =>{
    localStorage.setItem('user', JSON.stringify(user))
  }

  const DeleteUser = () =>{
    localStorage.removeItem('user')
  }

  return {
    GetUser,
    CreateUser,
    DeleteUser
  }
}

export default useLogin