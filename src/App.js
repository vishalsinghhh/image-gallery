import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import SubNav from "./components/SubNav";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";

function App() {
  const [data, setData] = useState()

  useEffect(()=>{
    const fn = async()=>{
      const res = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_CLIENT_KEY}&per_page=20`)
      const main = await res.json()
      setData(main)
    }
    fn()
  }, [])
  console.log(data);


  return (
    <div className="App">
      
      <div>
        <Navbar />
      </div>
      {/* <div className="loading"><Loading/></div> */}
      <div className="SubNav"><SubNav/></div>
      <div className="GalleryMain"><Gallery data={data}/></div>
    </div>
  );
}

export default App;
