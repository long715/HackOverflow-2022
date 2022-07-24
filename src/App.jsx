import CheckList from "./component/checklist/CheckList";
import Pomodoro from "./component/pomodoro/Pomodoro";
import React, { useState } from "react";
import ReadingStatus from "./component/ReadingStatus";
import Notebook from "./component/Notebook";


function App() {
  const [state,setState] = useState();

  return (
    <div className={`bg-[url('/public/img/static-bg.png')] h-screen w-screen`}>
      <ReadingStatus readingState = {state}/>
      <Pomodoro/>
      <Notebook onPageChange={setState}/>
      <CheckList/>
    </div>
  );
}

export default App;
