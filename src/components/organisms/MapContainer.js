import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map, GoogleApiWrapper } from "google-maps-react";
import styled from "styled-components";

import Header from "../molecules/Header";
import Loading from "../molecules/Loading";
import MarkCard from "../molecules/MarkCard";

//import LocationReducer from "../../redux/reducers/Location";
import { GetAllLocations } from "../../redux/actions/actions";

const Container = styled.section``;

const MapContainer = (props) => {
  //const { getAllLocations } = props;
  const dispatch = useDispatch();
  const places = useSelector((state) => state.LocationReducer.locations);

  const [location, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    dispatch(GetAllLocations());
    console.log("places", places);
    if (navigator && navigator.geolocation) {
      const getInitialLocation = async () => {
        await navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          setCurrentLocation({
            lat: coords.latitude,
            lng: coords.longitude,
          });
        });
      };
      getInitialLocation();
    }
    //setAllLocations(getAllLocations());
  }, []);

  const [allLocations, setAllLocations] = useState({});
  /* useEffect(() => {
    setAllLocations(getAllLocations());
  }, []); */

  const [selectedLocation, setSelectedLocation] = useState({});
  //const [mapMarker, setMapMarker] = useState({});
  const [isNewLocation, setNewLocation] = useState(false);
  //const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const handleClickMap = (props, map, e) => {
    setSelectedLocation(e.latLng);
    map.panTo(e.latLng);
    setNewLocation(true);
  };

  return (
    <Container>
      <Header />
      <Map
        center={location}
        google={props.google}
        onClick={handleClickMap}
        zoom={14}
      >
        {isNewLocation && (
          <MarkCard google={props.google} position={selectedLocation} />
        )}
      </Map>
    </Container>
  );
};

/* const mapStateToProps = (state) => {
  console.log(state);
  return {
    locations: state.LocationReducer.locations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllLocations: () => dispatch(GetAllLocations()),
  };
};*/

export default GoogleApiWrapper({
  apiKey: "AIzaSyD30_JunAh0N7lBhJKpbeLDdF7FhyvuUxY",
  LoadingContainer: Loading,
})(MapContainer);
