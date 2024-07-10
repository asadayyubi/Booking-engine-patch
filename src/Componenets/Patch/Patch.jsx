import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Calender from "../Calendar/Calender";
import Button from "../Button/Button";
import AutoSearch from "../AutoSearch/AutoSearch";
import "./patch.css";
import RoomsCountInput from "../RoomsCountInput/RoomsCountInput";
import { updateRooms } from "../../Redux/UserData/action";
import { useDispatch, useSelector } from "react-redux";
import AdultCount from "../AdultCountInput/AdultCount";
import ChildrenCount from "../ChildrenCountInput/ChildrenCount";
import { updateAdults } from "../../Redux/UserData/action";

const Patch = ({ colorCode, btnColor, brandId }) => {
  const [roomsCount, setRoomsCount] = useState(1);
  const [inputText, setInputText] = useState([
    "Select Adults",
    "Select Children",
  ]);
  const [selectedValue, setSelectedValue] = useState(0);
  const dispatch = useDispatch();

  //   console.log(selectedValue, "selected value adults");
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
  // useEffect(() => {
  //   dispatch(updateRooms(roomsCount));
  // }, []);
  return (
    <div className="container-patch" style={{ backgroundColor: colorCode }}>
      <div className="wrapper">
        <p className="patch-mainp-tag">BOOK YOUR <br /> <span>ROOMS</span></p>
        <Calender />
        <RoomsCountInput handleRoomCountChange={handleRoomCountChange} />
        {/* {inputText.map((text, i) => (
          <Input key={i} text={text} id={i} roomsCount={roomsCount} />
        ))} */}
        <AdultCount
          roomsCount={roomsCount}
          handleInputChange={handleInputChange}
          selectedValue={selectedValue}
        />
        <ChildrenCount roomsCount={roomsCount} selectedValue={selectedValue} />
        <AutoSearch brandId={brandId} />
        <Button btnColor={btnColor} />
      </div>
    </div>
  );
};

export default Patch;
