import * as types from "./actionsTypes";

export const GetAllLocations = () => ({
  type: types.GET_ALL_LOCATIONS,
  payload: {
    locations: localStorage.getItem("locations"),
  },
});

export const SetNewLocation = (data) => {
  localStorage.setItem("locations", JSON.stringify([{
    icon: data.icon,
    name: data.name,
    photo: data.photo,
    ...data.position
  }]));
  return {
    type: types.SET_NEW_LOCATION,
    payload: {
      icon: data.icon,
      name: data.name,
      photo: data.photo,
      ...data.position
    },
  };
};
