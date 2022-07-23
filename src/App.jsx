import ProgressBar from "./component/ProgressBar";
import CheckList from "./component/CheckList";
import Ghost from "./resources/images/ghost.png";

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
      </header>
    </div>
  );
}

export default App;
