import { Check, SquarePen, Trash2 } from 'lucide-react';
import React from 'react'

function PendingList(props) {
  // console.log(props);

  function handleFinish() {
    // localStorage.removeItem(props.list);
    let allLists = JSON.parse(localStorage.getItem("allLists"));

    for(let i=0;i<allLists.length;i++){
      if(allLists[i].id==props.id){
        allLists[i].status='finished';
      }
    }

    localStorage.setItem("allLists", JSON.stringify(allLists));
    props.setPendingStorageLength(props.pendingStorageLength - 1);
  }

  function handleUpdate(){
    props.setText(props.content);
    props.setIsUpdate(true);
    props.setTargetID(props.id);
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '70vw', padding: '5px 10px', backgroundColor: '#2C3E50', margin: '10px auto', borderRadius: '10px', alignItems: 'center', }}>
        <p style={{ width: '80%', color: 'white', fontSize: '20px', padding: '0 10px' }}>{props.content}</p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SquarePen onClick={handleUpdate} style={{ width: '30px', backgroundColor: 'orange', color: 'white', height: '50px', margin: 'auto 5px', borderRadius: "5px", padding: "0 10px",cursor:"pointer" }} />
          <Check onClick={handleFinish} style={{ width: '30px', backgroundColor: '#00c900', color: 'white', height: '50px', margin: 'auto 5px', borderRadius: "5px", padding: "0 10px",cursor:"pointer" }} />
        </div>
      </div>
    </>
  )
}

export default PendingList