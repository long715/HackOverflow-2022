
import React, {useState} from 'react';
import ReadingStatus from "./component/ReadingStatus";
import Notebook from "./component/Notebook";
import CheckList from './component/CheckList';



function App() {

  return (
    <div className={`bg-[url('/public/img/static-bg.png')] h-screen w-screen`}>
      <ReadingStatus/>
      <CheckList/>
      <Notebook/>
    </div>

  );
}

export default App;
