import React, { useEffect, useState } from "react";
import "./Button.css";
import { useDispatch, useSelector } from "react-redux";
import { constructObjForGetHotelById } from "../../Redux/UserData/action";

const Button = ({ btnColor }) => {
  const [data, setData] = useState({});

  const store = useSelector((store) => store?.reducerUserData || {});
  const dispatch = useDispatch();
  console.log(store, "from all data");
  const {
    from_date,
    to_date,
    no_of_adults,
    room_count,
    no_of_children,
    selected_hotel,
    parmas_for_api,
  } = store;
  useEffect(() => {
    dispatch(
      constructObjForGetHotelById({
        from_date,
        to_date,
        no_of_adults,
        room_count,
        no_of_children,
        id: selected_hotel?.hotel_id,
      })
    );
  }, [selected_hotel, no_of_adults, room_count, no_of_children]);
  const handleButtonClick = () => {
    // Construct the URL with the data as query parameters
    dispatch(
      constructObjForGetHotelById({
        from_date,
        to_date,
        no_of_adults,
        room_count,
        no_of_children,
        id: selected_hotel.hotel_id,
      })
    );

    console.log(store, "from all data");

    const url = `https://be.ratebotai.com/?data=${encodeURIComponent(
      JSON.stringify(store)
    )}`;

    // Redirect the user to the constructed URL
    window.location.href = url;
  };
  return (
    <div>
      <button
        className="hero-btn"
        style={{ backgroundColor: btnColor }}
        // style={{ padding: "10px 20px" }}
        onClick={handleButtonClick}
      >
        Book Now
      </button>
    </div>
  );
};

export default Button;
