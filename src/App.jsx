import Character from "./resources/images/owl.gif";

import React, {useState} from 'react';
import CheckList from "./component/CheckList";

function App() {
  const [onPage, setOnPage] = useState(false);

  return (
    <div className={`bg-[url('/public/img/static-bg.png')] h-screen w-screen`}>
      <div className ="flex justify-center items-center">
        <button className={`bg-white ${onPage? "block":"hidden"}`}>Map</button>
        <div className="w-32 h-32" onClick={()=> setOnPage(!onPage)}>
          <img src={Character} alt="this is an image" className="cursor-pointer"/>
        </div>
        <CheckList/>
      </div>
    </div>
  );
}

export default App;
