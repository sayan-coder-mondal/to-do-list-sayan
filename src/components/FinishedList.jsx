import { Hourglass, SquarePen, Trash2 } from 'lucide-react';
import React from 'react'

function FinishedList(props) {
  // console.log(props);

  function handleDelete() {
    // localStorage.removeItem(props.list);
    const data = JSON.parse(localStorage.getItem("allLists"));

    const newData = data.filter(item => item.id !== props.id);
    localStorage.setItem("allLists", JSON.stringify(newData));
    props.setFinishedStorageLength(props.finishedStorageLength - 1);
  }


  function handlePending() {
    // localStorage.removeItem(props.list);
    let allLists = JSON.parse(localStorage.getItem("allLists"));

    for(let i=0;i<allLists.length;i++){
      if(allLists[i].id==props.id){
        allLists[i].status='pending';
      }
    }

    localStorage.setItem("allLists", JSON.stringify(allLists));
    props.setFinishedStorageLength(props.finishedStorageLength - 1);
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '70vw', padding: '5px 10px', backgroundColor: '#2C3E50', margin: '10px auto', borderRadius: '10px', alignItems: 'center', }}>
        <p style={{ width: '80%', color: 'white', fontSize: '20px', padding: '0 10px' }}>{props.content}</p>
        
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Hourglass onClick={handlePending} style={{ width: '30px', backgroundColor: 'orange', color: 'white', height: '50px', margin: 'auto 5px', borderRadius: "5px", padding: "0 10px",cursor:"pointer" }} />
          <Trash2 onClick={handleDelete} style={{ width: '30px', backgroundColor: 'red', color: 'white', height: '50px', margin: 'auto 5px', borderRadius: "5px", padding: "0 10px",cursor:"pointer" }} />
        </div>
      </div>
    </>
  )
}

export default FinishedList