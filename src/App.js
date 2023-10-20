import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import SubNav from "./components/SubNav";

function App() {
  return (
    <div className="App">
      
      <div>
        <Navbar />
      </div>
      {/* <div className="loading"><Loading/></div> */}
      <div><SubNav/></div>
      
    </div>
  );
}

export default App;
