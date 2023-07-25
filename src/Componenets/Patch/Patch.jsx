import React, { useState } from "react";
import Input from "../Input/Input";
import Calender from "../Calendar/Calender";
import Button from "../Button/Button";
import AutoSearch from "../AutoSearch/AutoSearch";
import "./patch.css";



const Patch = ({colorCode}) => {
  const [inputText, setInputText] = useState([
    "Select Adults",
    "Select Rooms",
    "Select Children",
  ]);
  

  
  return (
    <div className="container" style={{backgroundColor:colorCode}}>
      <div className="wrapper">
        <Calender  />
        {inputText.map((text, i) => (
          <Input key={i} text={text}  id={i}/>
        ))}
        <AutoSearch  />
        <Button />
      </div>
    </div>
  );
};

export default Patch;
