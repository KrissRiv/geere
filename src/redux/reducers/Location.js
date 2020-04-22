import * as types from "../actions/actionsTypes";
//import actions from "redux-form/lib/actions";

const initialState = {
  locations: []
};

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_LOCATIONS: {
      return {
        ...state,
        locations: action.payload.locations
      };
    }
    case types.SET_NEW_LOCATION: {
      return {
        ...state,
      };
    }
    default: return state;
  }
};

export default LocationReducer;
