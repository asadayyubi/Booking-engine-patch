import React, { useEffect, useState } from "react";
import "./mobile.css";
import Calendar from "../Calendar/Calender";
import Input from "../Input/Input";
import AutoSearch from "../AutoSearch/AutoSearch";
import Button from "../Button/Button";
import CloseIcon from "@mui/icons-material/Close";
import MobileDropdown from "../MobileDropdown/MobileDropdown";
import { useDispatch } from "react-redux";
import { updateAdults, updateRooms } from "../../Redux/UserData/action";
import RoomsCountInput from "../RoomsCountInput/RoomsCountInput";
import AdultCount from "../AdultCountInput/AdultCount";
import ChildrenCount from "../ChildrenCountInput/ChildrenCount";

const MobilePatch = ({ handleClose,colorCode,btnColor,brandId }) => {
  const [inputText, setInputText] = useState([
    "Select Adults",
    "Select Rooms",
    "Select Children",
  ]);
  const [roomsCount, setRoomsCount] = useState(1);
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(0);

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setSelectedValue(+e.target.value);
    dispatch(updateAdults(+e.target.value));
  };

  const handleRoomCountChange = (e) => {
    console.log(e.target.value, "comming from change rooms");
    setRoomsCount(+e.target.value);
    dispatch(updateRooms(+e.target.value));
  };

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

        {/* <div className="mobile-input">
          {inputText.map((text, i) => (
            <Input key={i} text={text} id={i} />
          ))}
        </div> */}
        <RoomsCountInput handleRoomCountChange={handleRoomCountChange} />
        <AdultCount
          roomsCount={roomsCount}
          handleInputChange={handleInputChange}
          selectedValue={selectedValue}
        />
        <ChildrenCount roomsCount={roomsCount} selectedValue={selectedValue} />

        <div className="mobile-autosearch">
          {/* <AutoSearch brandId={brandId}/> */}
          <MobileDropdown brandId={brandId}/>
        </div>

        <div className="mobile-button">
          <Button btnColor={btnColor}/>
        </div>
      </div>
    </>
  );
};

export default MobilePatch;
