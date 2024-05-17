import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import About from './pages/About'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/home" element={<Home/>} exact />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
    </BrowserRouter>
  )
}
