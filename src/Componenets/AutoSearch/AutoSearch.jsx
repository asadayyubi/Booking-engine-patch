import React, { useEffect, useState } from "react";
import { hotelFiltered } from "../../data";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../../Redux/Hotel/action";
import { SET_SELECTED_HOTEL_DATA } from "../../Redux/UserData/actionTypes";
import { updateHotelSelected, updateSelection } from "../../Redux/UserData/action";
import "./auto.css"

console.log(hotelFiltered);

const AutoSearch = ({ handleUserInput }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { isLoading, isError, hotels, message } = useSelector(
    (store) => store.reducerHotel
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotel());
  }, []);

  const handleOptionChange = (event, value) => {
    setSelectedOption(value);
    // handleUserInput({type:"auto",data:selectedOption})
    dispatch(
      updateHotelSelected(value)
    );
    console.log(selectedOption,"from selected autosearch");
  };

  return (
    <Autocomplete className="auto-complete-input"
      
      id="free-solo-demo"
      freeSolo
      options={hotels}
      getOptionLabel={(hotels) => hotels.combain_name}
      onChange={handleOptionChange}
      renderInput={(params) => (
        <TextField {...params} label="Search hotel or Location" />
      )}
    />
  );
};

export default AutoSearch;
