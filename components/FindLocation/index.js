import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "800px",
};

const defaultLocations = [
  { lat: 32.9776120064545, lng: -96.72221505951866 },
  { lat: 32.83056665743497, lng: -97.2080579711646 },
  { lat: 32.732929264944616, lng: -97.3382456423292 },
  { lat: 32.01327328293218, lng: -97.09918300000001 },
  { lat: 32.603072330812054, lng: -96.81252428650623 },
  { lat: 33.212898369205305, lng: -97.59725374232919 },
  { lat: 32.9361586006759, lng: -96.90602008650623 },
  { lat: 32.4083532589621, lng: -96.8226396288354 },
  { lat: 32.085332837170135, lng: -96.5010879 },
  { lat: 32.33602479880852, lng: -97.41682245767085 },
  { lat: 33.08170621843566, lng: -96.79687395767081 },
  { lat: 32.304338662619514, lng: -96.63846864417702 },
  { lat: 32.304393072051056, lng: -96.6384579153416 },
  { lat: 32.77064760026997, lng: -96.60015519999999 },
  { lat: 32.33798462476034, lng: -96.1109030288354 },
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
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={9}>
        {locations.map((location, index) => (
          <Marker key={index} position={location} label={4.5} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};
export default React.memo(MapComponent);
