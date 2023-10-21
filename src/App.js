import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import SubNav from "./components/SubNav";
import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [light, setLight] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const [inputValueSubNav, setInputValueSubNav] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleClickChange = () => {
    setLight(!light);
  };
  const handleInputChangeSubNav = (value) => {
    setInputValueSubNav(value);
  };

  useEffect(() => {
    const fn = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/?client_id=yAAzUnGZo-xO8mVfyXXpgMDFCfblFt0gd62JmPub2QM&per_page=20`
        );
        const main = await res.json();
        setData(main);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fn();
  }, []);

  const search = async (value) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${value}&client_id=yAAzUnGZo-xO8mVfyXXpgMDFCfblFt0gd62JmPub2QM&per_page=20`
      );
      const main = await res.json();
      setData(main.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleSubmit = (value) => {
    search(value);
  };

  return (
    <div className={!light ? "App":"App Dark"}>
      <div>
        <Navbar onInputChange={handleInputChange} onSubmit={handleSubmit} onClickChange={handleClickChange} light={light}/>
      </div>
      {loading && (
        <div className="loading">
          <Loading />
        </div>
      )}
      {!loading && (
        <div>
          <div className="SubNav">
            <SubNav onInputChange={handleInputChangeSubNav} onSubmit={handleSubmit}/>
          </div>
          <div className="GalleryMain">
            <Gallery data={data} light={light}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
