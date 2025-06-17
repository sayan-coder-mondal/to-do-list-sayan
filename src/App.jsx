import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input'
import AllLists from './components/AllLists'

function App() {
  const [text, setText] = useState("");
  const [isUpdate,setIsUpdate]=useState(false);
  const [targetID,setTargetID]=useState(null);
  useEffect(() => {
    // console.log(storageLength);
    
    if(!localStorage.getItem("allLists")){
      localStorage.setItem("allLists",JSON.stringify([]));
    }
  }, []);


  const [storageLength, setStorageLength] = useState(() => {
    const data = JSON.parse(localStorage.getItem("allLists"));
    return data ? data.length : 0;
  });
  
  
  return (
    <>
      <h1 style={{textAlign:'center'}}>MAKE LIST</h1>
      <Input storageLength={storageLength} setStorageLength={setStorageLength} text={text} setText={setText} isUpdate={isUpdate} setIsUpdate={setIsUpdate} targetID={targetID} setTargetID={setTargetID}/>
      <AllLists storageLength={storageLength} setStorageLength={setStorageLength} text={text} setText={setText} isUpdate={isUpdate} setIsUpdate={setIsUpdate} targetID={targetID} setTargetID={setTargetID}/>
    </>
  )
}

export default App
