import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import NotFound from './pages/NotFound'
function App() {

  return (
    <>
    <LandingPage /> 
    <Register />
    <Login />
    <ResetPassword/>
    <NotFound/>
    </>
  )
}

export default App
