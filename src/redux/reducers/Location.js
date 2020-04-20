import * as types from "../actions/actionsTypes";
//import actions from "redux-form/lib/actions";

const initialState = {
  locations: []
};

const LocationReducer = (state = initialState, action) => {
  console.log("state", state)
  console.log("action", action)
  console.log("types.GET_ALL_LOCATIONS", types.GET_ALL_LOCATIONS)
  switch (action.type) {
    case types.GET_ALL_LOCATIONS: {
      return {
        ...state,
        locations: action.payload.locations
      };
    }
    default: return state;
  }
};

export default LocationReducer;
