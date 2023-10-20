import React from "react";
import IOSSwitch from "../utils/Switch";
import "../css/Navbar.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="navbarMain">
      <div className="image cursor">Image Gallery</div>
      <div className="inputField">
        <div className="BsSearch">
          <BsSearch />
        </div>
        <input type="text" placeholder="Search image here" />
      </div>
      <div>
        <div className="flex navBTN">
          <div className="cursor">Explore</div>
          <div className="collection cursor">Collection</div>
          <div className="cursor">Community</div>
        </div>
      </div>
      <div className="flex">
        <div className="mode">Dark Mode</div>
        <div className="btn">
        <FormGroup>
          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} />
        </FormGroup>
        </div>
      </div>
      <div className="RxHamburgerMenu"><RxHamburgerMenu/></div>
    </div>
  );
};

export default Navbar;
