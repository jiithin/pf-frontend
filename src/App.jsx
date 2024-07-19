import { useContext } from 'react'
import './App.css'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Auth from './Components/Auth'
import Projects from './Pages/Projects'
import { Navigate, Route, Routes } from "react-router-dom"
import Footer from './Components/Footer'
import { TokenAuthenticationResponsecontext } from './ContextApi/TokenAuth'

function App() {
  const {isAuthorized,setIsAuthorized}=useContext(TokenAuthenticationResponsecontext)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={isAuthorized?<Dashboard/>:<Home/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth register/>} />
      <Route path='/projects' element={isAuthorized?<Projects/>:<Home/>} />
      <Route path='/*' element={<Navigate to={'/'}/>} />
    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
