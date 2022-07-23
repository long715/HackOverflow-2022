
import React, {useState} from 'react';
import ReadingStatus from "./component/ReadingStatus";
import Notebook from "./component/Notebook";


function App() {

  return (
    <div className={`bg-[url('/public/img/static-bg.png')] h-screen w-screen`}>
      <ReadingStatus/>
      <Notebook/>
    </div>

  );
}

export default App;
