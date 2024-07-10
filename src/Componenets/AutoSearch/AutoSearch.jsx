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

// console.log(hotelFiltered);

const AutoSearch = ({ handleUserInput, brandId }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { isLoading, isError, hotels, message } = useSelector(
    (store) => store?.reducerHotel
  );
  const dispatch = useDispatch();

  const withoutIdHotel = (hotels) => {
    console.log(hotels, "nnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
  };
  withoutIdHotel();
  console.log(selectedOption, "selected options    .. .  ");
  useEffect(() => {
    console.log(hotels, "from hotel effect");
    // console.log(brandId, "from brand id autosearch");
      dispatch(getHotel({ brand_id: brandId }));
    }, [brandId]);
  //   dispatch(getHotel({ brand_id: 49 }));
  // }, [49]);
  useEffect(() => {
    setSelectedOption(hotels[0]);
    dispatch(updateHotelSelected(hotels[0]));
  }, [hotels]);
  // console.log(hotels[0]);
  // const handleOptionChange = (event, value) => {
  //   setSelectedOption(value);
  //   // handleUserInput({type:"auto",data:selectedOption})
  //   dispatch(updateHotelSelected(value));
  //   // console.log(selectedOption, "from selected autosearch");
  //   console.log(value, "value and details");
  //   console.log(hotels, "hotels and details");
  // };

  return (
    <div>
      {/* <div className="select-hotel-cont-div">
        <select className="select-auto-options" onChange={handleOptionChange}>
          <option value="">--Select--</option>
          <option value={hotels[0]}>{hotels[0]?.combain_name}</option>
        </select>
      </div> */}
      {/* <Autocomplete
        className="auto-complete-input"
        id="free-solo-demo"
        freeSolo
        options={hotels}
        getOptionLabel={(hotels) => {
          const Hotelid = hotels?.combain_name?.split(" ");
          const removeHotelid = isNaN(Hotelid[0]);
          const withoutId = Hotelid?.splice(1, Hotelid.length)?.join(" ");

          if (removeHotelid == false) {
            return withoutId;
          } else {
            return hotels?.combain_name;
          }
        }}
        onChange={handleOptionChange}
        renderInput={(params) => (
          <TextField {...params} label="Search Hotel & Resorts or Location" />
        )}
      /> */}
      {/* <p>{selectedOption?.hotel_name}</p> */}
      <h2
        style={{
          border: "1px solid #bebdbd",
          padding: "14px 35px",
          borderRadius: "4px",
          color: "#fff",
        }}
      >
        {selectedOption?.hotel_name &&
          selectedOption.hotel_name.split(" ").slice(1).join(" ")}
      </h2>

      {/* <p>hotels</p> */}
    </div>
  );
};

export default AutoSearch;
