import Character from "./resources/images/download.jpg";
import React, {useState} from 'react';

function App() {
  const [onPage, setOnPage] = useState(false);

  return (
    <div className="bg-linen h-screen w-screen">
      <div className ="flex justify-center items-center">
        <button className={`bg-white ${onPage? "block":"hidden"}`}>Map</button>
        <div onClick={()=> setOnPage(!onPage)}>
          <img src={Character} alt="this is an image" className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}

export default App;
