import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Finished from './components/Finished'
import { useEffect } from 'react'

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/finished"} element={<Finished/>}/>
      </Routes>
    </>
  )
}

export default App
