import * as types from "./actionsTypes";

export const GetAllLocations = () => ({
  type: types.GET_ALL_LOCATIONS,
  payload: {
    locations: JSON.parse(localStorage.getItem("locations")),
  },
});

export const SetNewLocation = (data) => {
  const locations =
    (localStorage.getItem("locations") &&
      JSON.parse(localStorage.getItem("locations"))) ||
    [];
  locations.unshift({
    icon: data.icon,
    name: data.name,
    photo: data.photo,
    position: {...data.position},
  });
  localStorage.setItem("locations", JSON.stringify(locations));
  return {
    type: types.SET_NEW_LOCATION,
    payload: {
      isLoading: false,
    },
  };
};
