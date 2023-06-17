import {
  GET_HOTEL_FAILURE,
  GET_HOTEL_REQUEST,
  GET_HOTEL_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  hotels: [],
  message: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  console.log("from hotel reducer", payload);

  switch (type) {
    case GET_HOTEL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        hotels: [],
      };
    case GET_HOTEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        hotels: payload.data,
        message: payload.message,
      };
    case GET_HOTEL_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: payload.message,
      };

    default:
      return state;
  }
};
