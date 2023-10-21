import React, { useState } from "react";
import IOSSwitch from "../utils/Switch";
import "../css/Navbar.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ onInputChange, onSubmit, onClickChange, light }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value);
    if (event.key === "Enter") {
      onSubmit(value);
      setInputValue("");
    }
  };
  return (
    <div className={!light ? "navbarMain":"navbarMain navbarMainDark"}>
      <div className="image cursor">Image Gallery</div>
      <div className="inputField">
        <div className="BsSearch">
          <BsSearch />
        </div>
        <input
          type="text"
          placeholder="Search image here"
          onChange={handleInput}
          value={inputValue}
          onKeyPress={handleInput}
        />
      </div>
      <div>
        <div className="flex navBTN">
          <div className="cursor">Explore</div>
          <div className="collection cursor">Collection</div>
          <div className="cursor">Community</div>
        </div>
      </div>
      <div className="flex">
        <div className="mode">{light ? "Light Mode":"Dark Mode"}</div>
        <div className="btn" onClick={()=>{onClickChange()}}>
          <FormGroup>
            <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} />
          </FormGroup>
        </div>
      </div>
      <div className="RxHamburgerMenu">
        <RxHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
