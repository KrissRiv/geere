import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import styled from "styled-components";

import Header from "../molecules/Header";
import Loading from "../molecules/Loading";
import NewMark from "../molecules/NewMark";
import MarkList from "../molecules/MarkList";
import { GetAllLocations } from "../../redux/actions/actions";

const Container = styled.section``;

const MapContainer = (props) => {
  const dispatch = useDispatch();
  const [location, setCurrentLocation] = useState();
  const [selectedLocation, setSelectedLocation] = useState({});
  const [isNewLocation, setNewLocation] = useState(false);
  const places = useSelector((state) => state.LocationReducer.locations);

  useEffect(() => {
    dispatch(GetAllLocations());
  }, [isNewLocation]);

  useEffect(() => {
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

  const handleClickMap = (props, map, e) => {
    setSelectedLocation(e.latLng);
    map.panTo(e.latLng);
    setNewLocation(true);
  };

  const getMarkers = () => {
    return places.map((element, index) => {
      return <Marker key={index} name={element.name} position={element.position} />;
    });
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
        {places && places.length > 0 && getMarkers()}
        <MarkList locations={places} />
        {isNewLocation && (
          <NewMark
            google={props.google}
            position={selectedLocation}
            onNewMarker={setNewLocation}
          />
        )}
      </Map>
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyD30_JunAh0N7lBhJKpbeLDdF7FhyvuUxY",
  LoadingContainer: Loading,
})(MapContainer);
