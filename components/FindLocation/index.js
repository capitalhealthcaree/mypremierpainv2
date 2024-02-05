import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultLocations = [
  { lat: 32.97756700523594, lng: -96.72208631349376 },
  { lat: 32.83058468783163, lng: -97.20809015767082 },
];

const MapComponent = ({ specificLocation }) => {
  const locations = specificLocation ? [specificLocation] : defaultLocations;

  const center = locations.reduce(
    (acc, loc) => {
      acc.lat += loc.lat / locations.length;
      acc.lng += loc.lng / locations.length;
      return acc;
    },
    { lat: 0, lng: 0 }
  );

  return (
    <LoadScript googleMapsApiKey="AIzaSyCpBNr90j-cwpy4VemT03i_-E878KrDnZE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MapComponent);
