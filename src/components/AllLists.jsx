import React, { useEffect, useState } from 'react'
import List from './List';

function AllLists(props) {
    const [listArr,setListArr]=useState([]);
    // const [len,setLen]=useState(localStorage.length);

    useEffect(() => {
        const data=JSON.parse(localStorage.getItem("allLists"));
        setListArr(data);

    }, [props.storageLength,localStorage.getItem("allLists")]); // Runs only on mount
    
  return (
    <>
    {
        listArr.map((item,index)=>{
            return <List key={index} id={item.id} content={item.content} storageLength={props.storageLength} setStorageLength={props.setStorageLength} text={props.text} setText={props.setText} isUpdate={props.isUpdate} setIsUpdate={props.setIsUpdate} targetID={props.targetID} setTargetID={props.setTargetID}/>
        })
    }
    </>
  )
}

export default AllLists