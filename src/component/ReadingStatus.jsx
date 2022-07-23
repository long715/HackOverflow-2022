import Character from "../resources/images/owl.gif";
import React, {useState} from 'react';

function ReadingStatus(){
    const MAX =10; 
    const [onPage, setOnPage] = useState(false);
    const [count, setCount] = useState(0); 
    return(
        <div>
            <div className="flex flex-col w-1/2 h-1/5 bg-[#CCEBE7] border-2 border-[#511414] rounded-sm">
                <div className="h-3/5 ml-2 mt-2">
                    <p>Now Reading:</p>
                    <h2 className="font-bold text-2xl">The Lord of The Rings</h2>
                </div>
                <div className="w-78 h-2/5 bottom-0 bg-[#94C6C9]">
                    <p className="ml-1 mt-1">Progress: {count}/10 Chapters</p>
                </div>
            </div>
            <div className ="flex justify-center items-center">
                <button className={`bg-[#CCEBE7] ${onPage? "block":"hidden"} w-24 h-24 bg-[#CCEBE7] border-[#511414] border-2`} onClick={()=>setCount(count-1)} disabled={count<=0? true:false}>-1 Chapter</button>
                <div className="w-32 h-32" onClick={()=> setOnPage(!onPage)}>
                    <img src={Character} alt="this is an image" className="cursor-pointer"/>
                </div>
                <button className={`bg-[#CCEBE7] ${onPage? "block":"hidden"} w-24 h-24 bg-[#CCEBE7] border-[#511414] border-2`} onClick={()=>setCount(count+1)} disabled={count>=MAX? true:false}>+1 Chapter</button>
            </div>
        </div>
    );
}

export default ReadingStatus; 