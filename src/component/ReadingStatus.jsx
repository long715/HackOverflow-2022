import Character from "../resources/images/flying-owl-apng.png";
import React, {useState} from 'react';

function ReadingStatus(props){
    const MAX = props?.readingState?.doc?._pdfInfo?.numPages ?? 10; 
    const [onPage, setOnPage] = useState(false);
    const [count, setCount] = useState(0);

    const pageNum = props?.readingState?.currentPage; 
    
    console.log({currentPage: props?.readingState?.currentPage, max: MAX})
    return(
        <div className="">

            <div className="flex flex-col w-1/3 h-1/5 bg-[#CCEBE7] border-2 border-[#511414] rounded-sm absolute left-2 top-2">
                <div className="h-3/5 ml-2 mt-2 text-[#573E3E] bg-[#CCEBE7]">

                    <p>Now Reading:</p>
                    <h2 className="font-bold text-2xl">The Lord of The Rings</h2>
                </div>
                <div className="w-78 h-2/5 bottom-0 bg-[#94C6C9]">

                    <p className="ml-2 text-[#573E3E] text-lg">Progress: {Math.floor(pageNum*100/MAX)}%</p>
                    <div className="flex flex-row h-4 m-2 mt-0">
                        <div className={`h-4 bg-[#795B5B] duration-100`} style={{flexGrow: pageNum}}></div>
                        <div className={`h-4 bg-[#EDE5E5]`} style={{flexGrow: MAX-pageNum}}></div>
                    </div>
                </div>
                
            </div>

            <div className ="flex flex-row justify-center items-center text-[#573E3E] h-screen w-screen">
                    
                    <div className="w-40 h-40" onClick={()=> setOnPage(!onPage)}>
                        <img src={Character} alt="this is an image" className=""/>
                    </div>
                   
            </div>
        </div>
    );
}

export default ReadingStatus; 