import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import styled from 'styled-components'

import Header from "../molecules/Header";

const Container = styled.section`

`


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 0,
        lng: 0,
      },
    };
  }
  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude,
          },
        });
      });

      /* this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        }); */
    } else {
      //TODO:
    }
  }

  mapClicked(mapProps, map, clickEvent) {
    console.log("mapProps", mapProps);
    console.log("map", map);
    console.log("clickEvent", clickEvent);
  }

  render() {
    const { currentLocation } = this.state;
    return (
      <Container>
        <Header />
        <Map
          center={{ ...currentLocation }}
          google={this.props.google}
          onClick={this.mapClicked}
          zoom={14}
        />
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD30_JunAh0N7lBhJKpbeLDdF7FhyvuUxY",
})(MapContainer);
