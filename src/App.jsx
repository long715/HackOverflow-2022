
import Character from "./resources/images/owl.gif";
import React, {useState} from 'react';
import CheckList from "./component/CheckList";
import Dropzone from "./component/Dropzone"

import ReadingStatus from "./component/ReadingStatus";

function App() {

  return (
    <div className={`bg-[url('/public/img/static-bg.png')] h-screen w-screen`}>

        <CheckList/>
      <ReadingStatus/>
      <Dropzone/>

    </div>
  );
}

export default App;
