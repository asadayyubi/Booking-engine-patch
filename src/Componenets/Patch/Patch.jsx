import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Calender from "../Calendar/Calender";
import Button from "../Button/Button";
import AutoSearch from "../AutoSearch/AutoSearch";
import "./patch.css";
import RoomsCountInput from "../RoomsCountInput/RoomsCountInput";
import { updateRooms } from "../../Redux/UserData/action";
import { useDispatch, useSelector } from "react-redux";

const Patch = ({ colorCode, btnColor, brandId }) => {
  const [roomsCount, setRoomsCount] = useState(1);
  const [inputText, setInputText] = useState([
    "Select Adults",
    "Select Children",
  ]);
  const dispatch = useDispatch();

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
        <Calender />
        <RoomsCountInput handleRoomCountChange={handleRoomCountChange} />
        {inputText.map((text, i) => (
          <Input key={i} text={text} id={i} roomsCount={roomsCount} />
        ))}
        <AutoSearch brandId={brandId} />
        <Button btnColor={btnColor} />
      </div>
    </div>
  );
};

export default Patch;
