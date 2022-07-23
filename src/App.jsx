import ProgressBar from "./component/ProgressBar";
import CheckList from "./component/CheckList";
import Ghost from "./resources/images/ghost.png";
import Pdf from "./component/Pdf"
import Dropzone from "./component/Dropzone"

function App() {
  return (
    <div className="App">
      <header className="">
        <p>
          hellooom
        </p>
        <div className ="owl-navigation">
          <button>Map</button>
          <img src={Ghost} alt="this is an image"/>
        </div>
        <ProgressBar/>
        <CheckList/>
        <Pdf/>
        <Dropzone/>
      </header>
    </div>
  );
}

export default App;
