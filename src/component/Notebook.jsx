import React, {useState} from 'react';
import Pdf from "./Pdf"

function Notebook(){
    const [show,setShow] = useState(false);
    return(
        <div className='h-[55%] w-screen'>
            
            <button className='absolute bg-[#94C6C9] h-36 w-32 right-0 bottom-0 border-2 border-[#511414] rounded-sm' onClick={()=> setShow(true)}> </button>
            <div className={`flex absolute inset-0 bg-black bg-opacity-60 justify-center items-center ${show? "block":"hidden"}`}>
                <div className="bg-[#94C6C9] w-3/5 h-5/6">
                    <button className='float-right mr-2 font-bold' onClick={()=>setShow(false)}>x</button>
                    <Pdf/>
                </div>

            </div>
        </div>
    );
}

export default Notebook;