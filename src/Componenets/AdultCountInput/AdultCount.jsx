import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAdults } from "../../Redux/UserData/action";

const AdultCount = ({ roomsCount, handleInputChange, selectedValue }) => {
  const noAdults = [...new Array(roomsCount * 3)];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAdults(1));
  }, [roomsCount]);

  return (
    <div style={{ margin: "5px 0" }}>
      <p
        className="select-p-mobile-view"
        style={{ fontSize: "18px", fontWeight: "500", margin: "5px" }}
      >
        {" "}
        Adults
      </p>
      <select
        className="mobile-select-mob-view"
        value={selectedValue}
        onChange={(e) => handleInputChange(e)}
        style={{
          border: "1px solid transparent",

          borderRadius: "4px",
        }}
      >
        {/* <option key={13} value={0}>
          --Select--
        </option> */}
        {/* <option  value="">1</option> */}
        {noAdults.map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AdultCount;
