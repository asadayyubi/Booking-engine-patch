import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateChildren } from "../../Redux/UserData/action";

const ChildrenCount = ({ roomsCount, selectedValue }) => {
  let arrLength = [
    ...new Array(
      selectedValue <= roomsCount * 3 ? roomsCount * 3 - selectedValue : null
    ),
  ];
  const noChildrens = arrLength;
  const [selectedChildValue, setSelectedChildValue] = useState("");
  const dispatch = useDispatch();
  //   console.log(selectedValue, "selected value adults");
  const handleInputChange = (e) => {
    setSelectedChildValue(+e.target.value);
    dispatch(updateChildren(+e.target.value));
    // if (arrLength.length === 0) {
    //     alert("from alert")
    // }
  };
  const popUpHandle = (childCount) => {
    if (childCount === 0) {
      alert(
        `Number of guest entered for a room exceeds maximum guests allowed \nMaximum guest allowed : ${
          roomsCount * 3
        } \nPlease update your search selection`
      );
    }
  };

  useEffect(() => {
    setSelectedChildValue(0);
    console.log(selectedChildValue, "running effect child");
    console.log(arrLength.length, "from handle input change");

    dispatch(updateChildren(0));
  }, [selectedValue]);
  return (
    <div style={{margin:"5px 0"}} onClick={() => popUpHandle(arrLength.length)}>
      <p className="select-p-mobile-view" style={{ fontSize: "18px", fontWeight: "500", margin: "5px", }}>
         Childrens
      </p>
      <select className="mobile-select-mob-view"
        value={selectedChildValue}
        onChange={(e) => handleInputChange(e)}
        style={{
          border: "1px solid transparent",
          
          borderRadius:"4px",
        }}
      >
        <option key={0} value={0}>
          {0}
        </option>
        {noChildrens.map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChildrenCount;
