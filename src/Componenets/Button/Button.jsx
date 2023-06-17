import React, { useEffect, useState } from "react";
import "./Button.css";
import { useSelector } from "react-redux";

const Button = () => {
  const [data, setData] = useState({});
  
  const store = useSelector(
    (store) => store.reducerUserData
  );


  const handleButtonClick = () => {
    // Construct the URL with the data as query parameters
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
        style={{ padding: "10px 20px" }}
        onClick={handleButtonClick}
      >
        Book Now
      </button>
    </div>
  );
};

export default Button;
