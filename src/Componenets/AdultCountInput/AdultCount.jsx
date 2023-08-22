import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAdults } from "../../Redux/UserData/action";


const AdultCount = ({ roomsCount,handleInputChange,selectedValue }) => {
  const noAdults = [...new Array(roomsCount * 3)];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAdults(1));
  },[roomsCount])
  
  return (
    <div>
      <p style={{ fontSize: "16px", fontWeight: "500",margin:"0px" }}>Select Adults</p>
      <select
        value={selectedValue}
        onChange={(e) => handleInputChange(e)}
        style={{
            border: "1px solid transparent",
            padding: "0px 25px",
          }}
      >
        {/* <option key={13} value={0}>
          --Select--
        </option> */}
        {noAdults.map((_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
    </div>
  );
};

export default AdultCount;
