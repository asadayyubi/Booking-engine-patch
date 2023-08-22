import {
  DATA_FOR_GET_HOTEL_BY_ID,
  SET_ADULTS,
  SET_CALENDER_RANGE,
  SET_CHILDREN,
  SET_ROOMS,
  SET_SELECTED_HOTEL_DATA,
} from "./actionTypes";

const initialState = {
  from_date: "",
  to_date: "",
  no_of_adults: 1,
  room_count: 1,
  no_of_children: 0,
  selected_hotel: {}, 
  parmas_for_api: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CALENDER_RANGE:
      return {
        ...state,
        from_date: payload[0],
        to_date: payload[1],
      };
    case SET_ADULTS:
      return {
        ...state,
        no_of_adults: payload,
      };

    case SET_ROOMS:
      return {
        ...state,
        room_count: payload,
      };
    case SET_CHILDREN:
      return {
        ...state,
        no_of_children: payload,
      };

    case SET_SELECTED_HOTEL_DATA:
      return {
        ...state,
        selected_hotel: payload,
      };
    case DATA_FOR_GET_HOTEL_BY_ID:
      return {
        ...state,
        parmas_for_api: payload,
      };

    default:
      return state;
  }
};
