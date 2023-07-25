import React, { useEffect, useState } from "react";
import "./mobile.css";
import Calendar from "../Calendar/Calender";
import Input from "../Input/Input";
import AutoSearch from "../AutoSearch/AutoSearch";
import Button from "../Button/Button";
import CloseIcon from "@mui/icons-material/Close";

const MobilePatch = ({ handleClose,colorCode }) => {
  const [inputText, setInputText] = useState([
    "Select Adults",
    "Select Rooms",
    "Select Children",
  ]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className={`mobile-patch-main transition-top ${
          mounted ? "transition-active" : ""
        }`}
        style={{backgroundColor:colorCode}}
      >
        <div className="close-icon">
          {" "}
          <CloseIcon
            style={{ fontSize: "40px", color: "#fff" }}
            onClick={() => handleClose(true, "mobile Patch")}
          />
        </div>
        <div className="mobile-calender">
          <Calendar />
        </div>

        <div className="mobile-input">
          {inputText.map((text, i) => (
            <Input key={i} text={text} id={i} />
          ))}
        </div>

        <div className="mobile-autosearch">
          <AutoSearch />
        </div>

        <div className="mobile-button">
          <Button />
        </div>
      </div>
    </>
  );
};

export default MobilePatch;
