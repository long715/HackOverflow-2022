import Dropzone from "./component/Dropzone"
import React, {useState} from 'react';
import ReadingStatus from "./component/ReadingStatus";

function App() {

  return (
    <div className={`bg-[url('/public/img/static-bg.png')] h-screen w-screen`}>
      <ReadingStatus/>
      <Dropzone/>

    </div>
  );
}

export default App;
