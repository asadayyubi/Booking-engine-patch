import {
  SET_ADULTS,
  SET_CALENDER_RANGE,
  SET_CHILDREN,
  SET_ROOMS,
  SET_SELECTED_HOTEL_DATA,
} from "./actionTypes";

export const updateCalender = (payload) => (dispatch) => {
  dispatch({type:SET_CALENDER_RANGE,payload})
};
export const updateAdults = (payload) => (dispatch) => {
  dispatch({type:SET_ADULTS,payload})
};

export const updateRooms = (payload) => (dispatch) => {
  dispatch({type:SET_ROOMS,payload})
};
export const updateChildren = (payload) => (dispatch) => {
  dispatch({type:SET_CHILDREN,payload})
};
export const updateHotelSelected = (payload) => (dispatch) => {
  dispatch({type:SET_SELECTED_HOTEL_DATA,payload})
};