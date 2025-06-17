import { SquarePen, Trash2 } from 'lucide-react';
import React from 'react'

function List(props) {
  // console.log(props);

  function handleDelete() {
    // localStorage.removeItem(props.list);
    const data = JSON.parse(localStorage.getItem("allLists"));

    const newData = data.filter(item => item.content !== props.content);
    localStorage.setItem("allLists", JSON.stringify(newData));
    props.setStorageLength(props.storageLength - 1);
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
        {/* <button onClick={handleDelete} style={{ width: '120px', backgroundColor: 'red', color: 'white', height: '50px', margin: 'auto 0' }}>Delete</button> */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SquarePen onClick={handleUpdate} style={{ width: '30px', backgroundColor: 'orange', color: 'white', height: '50px', margin: 'auto 5px', borderRadius: "5px", padding: "0 10px",cursor:"pointer" }} />
          <Trash2 onClick={handleDelete} style={{ width: '30px', backgroundColor: 'red', color: 'white', height: '50px', margin: 'auto 5px', borderRadius: "5px", padding: "0 10px",cursor:"pointer" }} />
        </div>
      </div>
    </>
  )
}

export default List