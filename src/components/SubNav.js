import React,{useState} from "react";
import back from "../static/back.svg";
import "../css/Subnav.css";
import { BsSearch } from "react-icons/bs";

const SubNav = ({onInputChange}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value); 
  };
  return (
    <div className="subNav">
      <img src={back} alt="" className="back" />
      <div className="subContent">
        <div className="subContentTitle">
          Download High Quality Images by creators
        </div>
        <div className="subContentSubTitle">
          Over 2.4 million+ stock Images by our talented community
        </div>
        <div className="flex1">
          <div className="BsSearch">
            <BsSearch />
          </div>
          <input
            type="text"
            placeholder="Search high resolution Images, categories, wallpapers"
            className="input"
            onChange={handleInput} value={inputValue} 
          />
        </div>
      </div>
    </div>
  );
};

export default SubNav;
