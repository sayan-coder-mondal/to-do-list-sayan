import React, { useEffect, useState } from 'react'
import Input from './Input';
import AllPendingLists from './AllPendingLists';
import { useNavigate } from 'react-router-dom';
import { MoveRight } from 'lucide-react';


function Home() {
    const [text, setText] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [targetID, setTargetID] = useState(null);

    const navigate=useNavigate();
    useEffect(() => {
        // console.log(pendingStorageLength);

        if (!localStorage.getItem("allLists")) {
            localStorage.setItem("allLists", JSON.stringify([]));
        }
    }, []);


    const [pendingStorageLength, setPendingStorageLength] = useState(() => {
        let allLists = JSON.parse(localStorage.getItem("allLists"));
        let data=[];
        if(allLists!=null){
            for(let i=0;i<allLists.length;i++){
                if(allLists[i].status=='pending'){
                    data.push(allLists[i]);
                }
            }
        }
        return data ? data.length : 0;
    });
    return (
        <>
            <button onClick={()=>navigate("/finished")} style={{position:"absolute",top:"20px",right:"5%",display:"flex"}}>Finshed Task <MoveRight /></button>
            <h1 style={{ textAlign: 'center'}}><span style={{fontSize:"4rem"}}>M</span>AKE<span style={{fontSize:"4rem"}}>L</span>IST</h1>
            <Input pendingStorageLength={pendingStorageLength} setPendingStorageLength={setPendingStorageLength} text={text} setText={setText} isUpdate={isUpdate} setIsUpdate={setIsUpdate} targetID={targetID} setTargetID={setTargetID} />
            <AllPendingLists pendingStorageLength={pendingStorageLength} setPendingStorageLength={setPendingStorageLength} text={text} setText={setText} isUpdate={isUpdate} setIsUpdate={setIsUpdate} targetID={targetID} setTargetID={setTargetID} />
        </>
    )
}

export default Home