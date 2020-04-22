import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map, GoogleApiWrapper } from "google-maps-react";
import styled from "styled-components";

import Header from "../molecules/Header";
import Loading from "../molecules/Loading";
import MarkCard from "../molecules/MarkCard";

import { GetAllLocations } from "../../redux/actions/actions";

const Container = styled.section``;

const MapContainer = (props) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.LocationReducer.locations);

  const [location, setCurrentLocation] = useState({
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    dispatch(GetAllLocations());
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
  }, []);

  const [selectedLocation, setSelectedLocation] = useState({});
  const [isNewLocation, setNewLocation] = useState(false);

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

export default GoogleApiWrapper({
  apiKey: "AIzaSyD30_JunAh0N7lBhJKpbeLDdF7FhyvuUxY",
  LoadingContainer: Loading,
})(MapContainer);
