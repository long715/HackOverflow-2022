
import Pdf from "./component/Pdf"
import Dropzone from "./component/Dropzone"
import Character from "./resources/images/owl.gif";
import React, {useState} from 'react';

function App() {
  const [onPage, setOnPage] = useState(false);

  return (
    <div className={`bg-[url('/public/img/static-bg.png')] h-screen w-screen`}>
      <div className ="flex justify-center items-center">
        <button className={`bg-white ${onPage? "block":"hidden"} w-24 h-24 bg-[#CCEBE7] border-[#511414] border-2`}>-1 Chapter</button>
        <div className="w-32 h-32" onClick={()=> setOnPage(!onPage)}>
          <img src={Character} alt="this is an image" className="cursor-pointer"/>
        </div>

        <button className={`bg-white ${onPage? "block":"hidden"} w-24 h-24 bg-[#CCEBE7] border-[#511414] border-2`}>+1 Chapter</button>
        <Dropzone/>
        <Pdf/>
      </div>
    </div>
  );
}

export default App;
