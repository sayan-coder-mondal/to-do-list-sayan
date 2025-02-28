import React, { useEffect, useState } from 'react'
import List from './List';

function AllLists(props) {
    const [listArr,setListArr]=useState([]);
    // const [len,setLen]=useState(localStorage.length);

    useEffect(() => {
        const len = props.storageLength;
        const lists = [];
        for (let i = 0; i < len; i++) {
            lists.push(localStorage.key(i));
        }
        setListArr(lists);
    }, [props.storageLength]); // Runs only on mount
    
  return (
    <>
    {
        listArr.map((item,index)=>{
            return <List key={index} list={item} storageLength={props.storageLength} setStorageLength={props.setStorageLength}/>
        })
    }
    </>
  )
}

export default AllLists