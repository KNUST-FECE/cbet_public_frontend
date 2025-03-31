import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Toaster } from 'react-hot-toast';
import Resources from './pages/resources/resources';


const App = () => {
  return (
    <div className='app'>
    <Toaster position='top-right' />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>  
        <Route path='/resources' element={<Resources/>}/>
      </Routes>
    </div>
  )
}

export default App