import React, {useState} from 'react';
import ReadingStatus from "./component/ReadingStatus";

function App() {

  return (
    <div className={`bg-[url('/public/img/static-bg.png')] h-screen w-screen`}>
      <ReadingStatus/>
    </div>
  );
}

export default App;
