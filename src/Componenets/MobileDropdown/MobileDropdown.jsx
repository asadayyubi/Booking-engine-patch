import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getHotel } from "../../Redux/Hotel/action";
import { useDispatch, useSelector } from "react-redux";
import { updateHotelSelected } from "../../Redux/UserData/action";
import "./mobileDropdown.css";

const MobileDropdown = ({ brandId }) => {
  const [age, setAge] = React.useState("");
  const { isLoading, isError, hotels, message } = useSelector(
    (store) => store?.reducerHotel
  );

  const handleChange = (event) => {
    console.log(event, "event console check");
    let selectedObj = hotels.find((hotel) => hotel?.combain_name === event.target.value)
    setAge(event.target.value);
    dispatch(updateHotelSelected(selectedObj));
  };
  React.useEffect(() => {
    console.log(age, "age console");
    console.log(hotels, "hotel details");
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    // console.log(hotels, "from hotel effect");
    // console.log(brandId, "from brand id autosearch");
    dispatch(getHotel({ brand_id: brandId }));
  }, [brandId]);
  return (
    <div>
      {/* <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth> */}
        {/* <InputLabel id="demo-simple-select-label">Hotels</InputLabel> */}
      {/* <label id="demo-simple-select-label" htmlFor="selectOption">Select an option:</label> */}
      <select
      className="mobile-dropdown-select"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
          label="Age"
        onChange={handleChange}
      >
        {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}

        {/* {hotels?.map((hotel) => (
              <MenuItem  value={hotel}>{hotel?.combain_name}</MenuItem>
            ))} */}
        <option value={""}>--Select--</option>
        {hotels?.map((hotel) => (
          <option value={hotel?.combain_name}  >{hotel?.combain_name} </option>
        ))}
      </select>
      
      {/* </FormControl>
    </Box> */}
    </div>
  );
};

export default MobileDropdown;
