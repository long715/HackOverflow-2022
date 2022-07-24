import React, {useState} from 'react';
import NotePic from "../resources/images/notebook.png";
import Pdf from "./Pdf"

function Notebook(){
    const [show,setShow] = useState(false);
    return(
        <div className=' w-screen'>
            
            <button className='text-[#3F0D0D] flex flex-col text-center items-center justify-center space-y-2 absolute bg-[#94C6C9] h-32 w-28 right-2 bottom-2 border-2 border-[#511414] rounded-sm' onClick={()=> setShow(true)}>
                <img src={NotePic} className='w-16 h-16'/>
                <p className='font-bold text-md'>Notebook</p>
            </button>
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