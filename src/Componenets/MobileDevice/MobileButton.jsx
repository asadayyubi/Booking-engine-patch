import React, { useState } from "react";
import "./mobile.css";
import MobilePatch from "./MobilePatch";

const MobileButton = () => {
  const [toggleComponent, setToggleComponent] = useState(true);
  const handleToggle = (e) => {
    setToggleComponent(false);
  };
  const handleClose = (boolValue,passing) => {
    console.log("comming from",passing,boolValue);
    setToggleComponent(boolValue)
  }
  if (toggleComponent) {
    return (
      <div className="mobile-button-main-comp" onClick={handleToggle}>
        <div className="mobile-button-wrapper">
          <button>Book Now</button>
        </div>
      </div>
    );
  } else {
    return <MobilePatch handleClose={handleClose} />;
  }
};

export default MobileButton;
