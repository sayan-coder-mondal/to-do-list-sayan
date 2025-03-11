import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input'
import AllLists from './components/AllLists'

function App() {
  const[storageLength,setStorageLength]=useState(localStorage.length);
  
  return (
    <>
      <h1 style={{textAlign:'center'}}>List App</h1>
      <Input storageLength={storageLength} setStorageLength={setStorageLength}/>
      <AllLists storageLength={storageLength} setStorageLength={setStorageLength}/>
    </>
  )
}

export default App
