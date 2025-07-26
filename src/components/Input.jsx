import React, { useState } from 'react'

function Input(props) {

    function addToLocal() {
        if (props.text.trim() != "") {
            const data = JSON.parse(localStorage.getItem("allLists"));
            data.push({ id: Date.now(), content: props.text.trim(), status: "pending" });
            localStorage.setItem("allLists", JSON.stringify(data));
            props.setPendingStorageLength(props.pendingStorageLength + 1);
        }
        props.setText("");
    }

    function handleAllFinished() {
        let allLists=localStorage.getItem("allLists");
        allLists=JSON.parse(allLists);
        let len=allLists.length;
        for(let i=0;i<len;i++){
            if(allLists[i].status=='pending'){
                allLists[i].status='finished';
            }
        }
        localStorage.setItem("allLists",JSON.stringify(allLists));
        props.setIsUpdate(false);
        props.setPendingStorageLength(0);
    }

    function updateToLocal() {
        props.setIsUpdate(false);

        if (props.text.trim() != "") {
            // binary search
            const data = JSON.parse(localStorage.getItem("allLists"));
            const len = props.pendingStorageLength;
            for (let i = 0; i < len; i++) {
                if (props.targetID == data[i].id) {
                    data[i].content = props.text;
                    break;
                }
            }
            localStorage.setItem("allLists", JSON.stringify(data));
        }

        props.setTargetID(null);

        props.setText("");
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80vw', margin: '20px auto' }}>
                <input type="text" value={props.text} onChange={(e) => props.setText(e.target.value)} style={{ width: '60vw', fontSize: '20px', padding: '10px', margin: 'auto' }} />
                <div style={{ margin: 'auto' }}>
                    {
                        props.isUpdate ?
                            <button onClick={updateToLocal} style={{ width: '120px', backgroundColor: 'blue', color: 'white', margin: '10px' }}>Update</button>
                            :
                            <button onClick={addToLocal} style={{ width: '120px', backgroundColor: 'blue', color: 'white', margin: '10px' }}>Add</button>
                    }
                    <button onClick={handleAllFinished} style={{ width: '120px', backgroundColor: 'green', color: 'white', margin: '10px' }}>Finish All</button>
                </div>
            </div>
        </>
    )
}

export default Input