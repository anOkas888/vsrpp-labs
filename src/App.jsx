import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Whoops404 from './pages/Whoops404'
import SignIn from './pages/SingIn'
import SignUp from './pages/SingUp'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signIn' element={<SignIn />} />
      <Route path='signUp' element={<SignUp />} />
      <Route path='*' element={<Whoops404 />} />
    </Routes>
  )
}

export default App
