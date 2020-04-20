import * as types from "./actionsTypes";

export const GetAllLocations = () => ({
  type: types.GET_ALL_LOCATIONS,
  payload: {
    locations: []
  }
});
