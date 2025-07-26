import React, { useEffect, useState } from 'react'
import PendingList from './PendingList';

function AllPendingLists(props) {
    const [listArr,setListArr]=useState([]);
    // const [len,setLen]=useState(localStorage.length);

    useEffect(() => {
        const allLists=JSON.parse(localStorage.getItem("allLists"));
        let data=[];
        if(allLists!=null){
            for(let i=0;i<allLists.length;i++){
                if(allLists[i].status=='pending'){
                    data.push(allLists[i]);
                }
            }
        }
        setListArr(data);

    }, [props.pendingStorageLength,localStorage.getItem("allLists")]); // Runs only on mount
    
  return (
    <>
    {
        listArr.map((item,index)=>{
            return <PendingList key={index} id={item.id} content={item.content} pendingStorageLength={props.pendingStorageLength} setPendingStorageLength={props.setPendingStorageLength} text={props.text} setText={props.setText} isUpdate={props.isUpdate} setIsUpdate={props.setIsUpdate} targetID={props.targetID} setTargetID={props.setTargetID}/>
        })
    }
    </>
  )
}

export default AllPendingLists