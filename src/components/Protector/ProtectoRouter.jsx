import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectoRouter = ({ isLogin }) => {
  const userLocal = localStorage.getItem('User')
  console.log(userLocal)
  if (userLocal) {
    return <Navigate to='/MainPage' />
  } else {

  }
  return (
    <>

    </>
  )
}

export default ProtectoRouter
