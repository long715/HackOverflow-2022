import Character from "../resources/images/owl.gif";
import React, {useState} from 'react';
import ProgressBar from "./ProgressBar";

function ReadingStatus(){
    const MAX =10; 
    const [onPage, setOnPage] = useState(false);
    const [count, setCount] = useState(0); 
    return(
        <div>

            <div className="flex flex-col w-1/3 h-1/5 bg-[#CCEBE7] border-2 border-[#511414] rounded-sm">
                <div className="h-3/5 ml-2 mt-2 text-[#573E3E]">

                    <p>Now Reading:</p>
                    <h2 className="font-bold text-2xl">The Lord of The Rings</h2>
                </div>
                <div className="w-78 h-2/5 bottom-0 bg-[#94C6C9]">

                    <p className="ml-2 mt-2 text-[#573E3E] text-lg">Progress: {count*100/MAX}%</p>
                    <div className="flex flex-row h-4 m-2">
                        <div className={`h-4 bg-[#795B5B] duration-100`} style={{flexGrow: count}}></div>
                        <div className={`h-4 bg-[#EDE5E5]`} style={{flexGrow: MAX-count}}></div>
                    </div>
                </div>
                
            </div>

            <div className ="flex justify-center items-center text-[#573E3E]">
                <button className={`bg-[#CCEBE7] ${onPage? "block":"hidden"} w-24 h-24 bg-[#CCEBE7] border-[#511414] border-2 rounded-md hover:bg-[#94C6C9]`} onClick={()=>setCount(count-1)} disabled={count<=0? true:false}>Previous Chapter</button>
                <div className="w-44 h-44" onClick={()=> setOnPage(!onPage)}>
                    <img src={Character} alt="this is an image" className="cursor-pointer"/>
                </div>
                <button className={`bg-[#CCEBE7] ${onPage? "block":"hidden"} w-24 h-24 bg-[#CCEBE7] border-[#511414] border-2 rounded-md hover:bg-[#94C6C9]`} onClick={()=>setCount(count+1)} disabled={count>=MAX? true:false}>Next Chapter</button>
            </div>
        </div>
    );
}

export default ReadingStatus; 