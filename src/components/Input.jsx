import React, { useState } from 'react'

function Input(props) {
    const [text, setText] = useState("");

    function addToLocal() {
        if(text.trim()!=""){
            localStorage.setItem(text, text);
            props.setStorageLength(props.storageLength + 1);
        }
        setText("");
    }

    function handleAllDelete() {
        localStorage.clear();
        props.setStorageLength(0);
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', width: '80vw', margin: '20px auto' }}>
                <input type="text" onChange={(e) => setText(e.target.value)} style={{ width: '60vw', fontSize: '20px', padding: '10px' ,margin:'auto'}} />
                <div style={{margin:'auto'}}>
                    <button onClick={addToLocal} style={{ width: '120px', backgroundColor: 'blue', color: 'white', margin: '10px' }}>Add</button>
                    <button onClick={handleAllDelete} style={{ width: '120px', backgroundColor: 'red', color: 'white', margin: '10px' }}>Clear All</button>
                </div>
            </div>
        </>
    )
}

export default Input