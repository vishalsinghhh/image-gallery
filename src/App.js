import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      
      <div>
        <Navbar />
      </div>
      <div className="loading"><Loading/></div>
      
    </div>
  );
}

export default App;
