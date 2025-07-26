import React, { useEffect, useState } from 'react'
import FinishedList from './FinishedList';

function AllFinishedLists(props) {
    const [listArr, setListArr] = useState([]);
    // const [len,setLen]=useState(localStorage.length);

    useEffect(() => {
        const allLists = JSON.parse(localStorage.getItem("allLists"));
        let data = [];
        if (allLists != null) {
            for (let i = 0; i < allLists.length; i++) {
                if (allLists[i].status == 'finished') {
                    data.push(allLists[i]);
                }
            }
        }
        setListArr(data);

    }, [props.finishedStorageLength, localStorage.getItem("allLists")]); // Runs only on mount


    function handleAllDelete() {
        const data = JSON.parse(localStorage.getItem("allLists"));
        const newData = data.filter(item => item.status == 'pending');
        localStorage.setItem("allLists", JSON.stringify(newData));

        props.setFinishedStorageLength(0);
        props.setIsUpdate(false);
    }

    function handleAllPending(){
        let allLists=localStorage.getItem("allLists");
        allLists=JSON.parse(allLists);
        let len=allLists.length;
        for(let i=0;i<len;i++){
            if(allLists[i].status=='finished'){
                allLists[i].status='pending';
            }
        }
        localStorage.setItem("allLists",JSON.stringify(allLists));
        props.setIsUpdate(false);
        props.setFinishedStorageLength(0);
    }

    return (
        <>
        <div style={{margin:"auto",display:"flex",justifyContent:"center"}}>
            <button onClick={handleAllPending} style={{ width: '125px', backgroundColor: 'orange', color: 'white', margin: '10px',padding:"12px 0"}}>Pending All</button>
            <button onClick={handleAllDelete} style={{ width: '125px', backgroundColor: 'red', color: 'white', margin: '10px',padding:"12px 0"}}>Delete All</button>
        </div>
            {
                listArr.map((item, index) => {
                    return <FinishedList key={index} id={item.id} content={item.content} finishedStorageLength={props.finishedStorageLength} setFinishedStorageLength={props.setFinishedStorageLength} text={props.text} setText={props.setText} isUpdate={props.isUpdate} setIsUpdate={props.setIsUpdate} targetID={props.targetID} setTargetID={props.setTargetID} />
                })
            }
        </>
    )
}

export default AllFinishedLists