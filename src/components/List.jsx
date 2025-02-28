import React from 'react'

function List(props) {
    // console.log(props);
    
    function handleDelete(){
        localStorage.removeItem(props.list);
        props.setStorageLength(props.storageLength-1);
    }

  return (
    <>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'70vw',padding:'5px 10px',backgroundColor:'#2C3E50',margin:'10px auto',borderRadius:'10px',alignItems: 'center',}}>
        <p style={{width: '80%',color:'white',fontSize:'20px',padding:'0 10px'}}>{props.list}</p>
        <button onClick={handleDelete} style={{width:'120px',backgroundColor:'red',color:'white',height:'50px',margin:'auto 0'}}>Delete</button>
    </div>
    </>
  )
}

export default List