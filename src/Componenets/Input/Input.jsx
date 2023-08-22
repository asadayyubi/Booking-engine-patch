import React, { useState } from "react";
import "./input.css";
import { useDispatch, useSelector } from "react-redux";

import {
  updateAdults,
  updateChildren,
  updateRooms,
} from "../../Redux/UserData/action";

const Input = ({ text, roomsCount }) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const store = useSelector((store) => store.reducerUserData);
  const dispatch = useDispatch();

  const handleChange = (e, text) => {
    setSelectedValue(e.target.value);
    if (text === "Select Adults") {
      dispatch(updateAdults(+e.target.value));
    } else if (text === "Select Children") {
      dispatch(updateChildren(+e.target.value));
    } 
    // else {
    //   dispatch(updateRooms(+e.target.value));
    // }
  };

  return (
    <div className="main-input-container">
      <p style={{ marginBottom: "0px" }}>{text}</p>
      {/* <div className="scrollbar"> */}
      {/* <select
        id="dropdown"
        className="mobile-select"
        value={selectedValue}
        onChange={(e) => handleChange(e, text)}
        style={{
          border: "1px solid transparent",
          padding: "0px 25px",
        }}
      >
        {text === "Select Children" ? <option value="0">0</option> : null}
        {[
          ...Array(
            text === "Select Children" ? roomsCount * 3 - 2 : roomsCount * 3
          ),
        ].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select> */}
      {/* </div> */}
    </div>
  );
};

export default Input;
