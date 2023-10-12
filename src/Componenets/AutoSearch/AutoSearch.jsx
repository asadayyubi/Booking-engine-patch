import React, { useEffect, useState } from "react";
import { hotelFiltered } from "../../data";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../../Redux/Hotel/action";
import { SET_SELECTED_HOTEL_DATA } from "../../Redux/UserData/actionTypes";
import {
  updateHotelSelected,
  updateSelection,
} from "../../Redux/UserData/action";
import "./auto.css";

console.log(hotelFiltered);

const AutoSearch = ({ handleUserInput, brandId }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { isLoading, isError, hotels, message } = useSelector(
    (store) => store?.reducerHotel
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(hotels, "from hotel effect");
    // console.log(brandId, "from brand id autosearch");
    dispatch(getHotel({ brand_id: brandId }));
  }, [brandId]);
  // console.log(hotels[0]);
  const handleOptionChange = (event, value) => {
    setSelectedOption(value);
    // handleUserInput({type:"auto",data:selectedOption})
    dispatch(updateHotelSelected(value));
    // console.log(selectedOption, "from selected autosearch");
  };

  return (
    <div>
      {/* <div className="select-hotel-cont-div">
        <select className="select-auto-options" onChange={handleOptionChange}>
          <option value="">--Select--</option>
          <option value={hotels[0]}>{hotels[0]?.combain_name}</option>
        </select>
      </div> */}
      <Autocomplete
        className="auto-complete-input"
        id="free-solo-demo"
        freeSolo
        options={hotels}
        getOptionLabel={(hotels) => {
          console.log("from get option", hotels?.combain_name);
          return hotels?.combain_name;
          
        }}
        onChange={handleOptionChange}
        renderInput={(params) => (
          <TextField {...params} label="Search hotel or Location" />
        )}
      />
    </div>
  );
};

export default AutoSearch;
