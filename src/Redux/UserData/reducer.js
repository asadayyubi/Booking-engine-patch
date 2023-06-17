import {
  SET_ADULTS,
  SET_CALENDER_RANGE,
  SET_CHILDREN,
  SET_ROOMS,
  SET_SELECTED_HOTEL_DATA,
} from "./actionTypes";

const initialState = {
  from_to: {},
  adults: 0,
  rooms: 0,
  children: 0,
  selected_hotel: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CALENDER_RANGE:
        console.log("comming from calendar",payload);
      return {
        ...state,
        from_to:payload,
      };
    case SET_ADULTS:
      return {
        ...state,
        adults: payload,
      };

    case SET_ROOMS:
      return {
        ...state,
        rooms: payload,
      };
    case SET_CHILDREN:
      return {
        ...state,
        children: payload,
      };

    case SET_SELECTED_HOTEL_DATA:
      return {
        ...state,
        selected_hotel: payload,
      };

    default:
      return state
  }
};
