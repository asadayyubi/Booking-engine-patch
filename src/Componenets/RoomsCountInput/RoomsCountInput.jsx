import React from "react";


const RoomsCountInput = ({ handleRoomCountChange }) => {
  return (
    <div style={{margin:"5px 0"}}>
      <p className="select-p-mobile-view" style={{ fontSize: "18px", fontWeight: "500",margin:"5px", }}> Rooms</p>
      <select  className="mobile-select-mob-view"
        onChange={handleRoomCountChange}
        style={{
          border: "1px solid transparent",
         
          borderRadius:"4px",
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </div>
  );
};

export default RoomsCountInput;
