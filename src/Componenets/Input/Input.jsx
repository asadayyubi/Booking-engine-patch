import React, { useState } from "react";
import "./input.css";
import { useDispatch, useSelector } from "react-redux";

import { updateAdults, updateChildren, updateRooms} from "../../Redux/UserData/action";

const Input = ({text}) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const store = useSelector((store) => store.reducerUserData);
  const dispatch = useDispatch();

  const handleChange = (e, text) => {
    setSelectedValue(e.target.value);
    if (text === "Select Adults") {
      dispatch(updateAdults(+e.target.value));
    } else if (text === "Select Children") {
      dispatch(updateChildren(+e.target.value));
    } else {
      dispatch(updateRooms(+e.target.value));
    }
  };

  return (
    <div className="main-input-container">
      <p>{text}</p>
      <select
        id="dropdown"className="mobile-select"
        value={selectedValue}
        onChange={(e) => handleChange(e,text)}
      >
        <option value="">-- Select --</option>
        {[...Array(10)].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Input;
