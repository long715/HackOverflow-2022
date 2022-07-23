import CheckList from "./component/CheckList";
import Pomodoro from "./component/Pomodoro";
import React, {useState} from 'react';
import ReadingStatus from "./component/ReadingStatus";
import Notebook from "./component/Notebook";

function App() {

  return (

    <div className={`bg-[url('/public/img/static-bg.png')] h-screen w-screen`}>
      <ReadingStatus/>
      <Pomodoro />
      <Notebook/>
      
    </div>

  );
}

export default App;
