import React from "react";

const RoomsCountInput = ({ handleRoomCountChange }) => {
  return (
    <div>
      <p style={{ fontSize: "16px", fontWeight: "500",margin:"0px" }}>Select Rooms</p>
      <select
        onChange={handleRoomCountChange}
        style={{
          border: "1px solid transparent",
          padding: "0px 25px",
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3">4</option>
        <option value="3">5</option>
        <option value="3">6</option>
        <option value="3">7</option>
        <option value="3">8</option>
        <option value="3">9</option>
      </select>
    </div>
  );
};

export default RoomsCountInput;
