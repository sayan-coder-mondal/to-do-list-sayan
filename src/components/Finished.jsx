import React, { useEffect, useState } from 'react'
import Input from './Input';
import AllFinishedLists from './AllFinishedLists';
import { useNavigate } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';


function Finished() {
    const [text, setText] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [targetID, setTargetID] = useState(null);

    const navigate=useNavigate();
    useEffect(() => {
        // console.log(finishedStorageLength);

        if (!localStorage.getItem("allLists")) {
            localStorage.setItem("allLists", JSON.stringify([]));
        }
    }, []);


    const [finishedStorageLength, setFinishedStorageLength] = useState(() => {
        let allLists = JSON.parse(localStorage.getItem("allLists"));
        let data=[];
        if(allLists!=null){
            for(let i=0;i<allLists.length;i++){
                if(allLists[i].status=='finished'){
                    data.push(allLists[i]);
                }
            }
        }
        return data ? data.length : 0;
    });
    return (
        <>
            <button onClick={()=>navigate("/")} style={{position:"absolute",top:"20px",left:"5%",display:"flex"}}><MoveLeft />Pending Task</button>
            <h1 style={{ textAlign: 'center'}}><span style={{fontSize:"4rem"}}>M</span>AKE<span style={{fontSize:"4rem"}}>L</span>IST</h1>
            <AllFinishedLists finishedStorageLength={finishedStorageLength} setFinishedStorageLength={setFinishedStorageLength} text={text} setText={setText} isUpdate={isUpdate} setIsUpdate={setIsUpdate} targetID={targetID} setTargetID={setTargetID} />
        </>
    )
}

export default Finished